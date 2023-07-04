---
title: DapperHelper
date: 2020-03-17
tags: [.NET,Database,ORM]
categories: Developer
---
Dapper is a simple object mapper for .NET and owns the title of **King of Micro ORM** in terms of speed and is virtually as fast as using a raw ADO.NET data reader. An ORM is an Object Relational Mapper, which is responsible for mapping between database and programming language.
<!--more-->
Dapper extends the IDbConnection by providing useful extension methods to query your database.

## How Dapper Works?
It is a three-step process.
- Create an IDbConnection object.
- Write a query to perform CRUD operations.
- Pass query as a parameter in the Execute method.

## Installation
Dapper is installed through NuGet: [https://www.nuget.org/packages/Dapper](https://www.nuget.org/packages/Dapper)

```
PM> Install-Package Dapper
```

## Requirement
Dapper works with any database provider since there is no DB specific implementation.

## Methods
Dapper will extend your IDbConnection interface with multiple methods:
- [Execute](https://dapper-tutorial.net/execute)
- [Query](https://dapper-tutorial.net/query)
- [QueryFirst](https://dapper-tutorial.net/queryfirst)
- [QueryFirstOrDefault](https://dapper-tutorial.net/queryfirstordefault)
- [QuerySingle](https://dapper-tutorial.net/querysingle)
- [QuerySingleOrDefault](https://dapper-tutorial.net/querysingleordefault)
- [QueryMultiple](https://dapper-tutorial.net/querymultiple)

```cs
string sqlOrderDetails = "SELECT TOP 5 * FROM OrderDetails;";
string sqlOrderDetail = "SELECT * FROM OrderDetails WHERE OrderDetailID = @OrderDetailID;";
string sqlCustomerInsert = "INSERT INTO Customers (CustomerName) Values (@CustomerName);";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{
    var orderDetails = connection.Query<OrderDetail>(sqlOrderDetails).ToList();
    var orderDetail = connection.QueryFirstOrDefault<OrderDetail>(sqlOrderDetail, new {OrderDetailID = 1});
    var affectedRows = connection.Execute(sqlCustomerInsert,  new {CustomerName = "Mark"});

    Console.WriteLine(orderDetails.Count);
    Console.WriteLine(affectedRows);

    FiddleHelper.WriteTable(orderDetails);
    FiddleHelper.WriteTable(new List<OrderDetail>() { orderDetail });
}
```

Try it: [.NET Core](https://dotnetfiddle.net/FghvFq) | [.NET Framework](https://dotnetfiddle.net/vIvUNm)

## Parameter
Execute and queries method can use parameters from multiple different ways:

- [Anonymous](https://dapper-tutorial.net/parameter-anonymous)
- [Dynamic](https://dapper-tutorial.net/parameter-dynamic)
- [List](https://dapper-tutorial.net/parameter-list)
- [String](https://dapper-tutorial.net/parameter-string)

```cs
// Anonymous
var affectedRows = connection.Execute(sql,
                    new {Kind = InvoiceKind.WebInvoice, Code = "Single_Insert_1"},
                    commandType: CommandType.StoredProcedure);

// Dynamic
DynamicParameters parameter = new DynamicParameters();

parameter.Add("@Kind", InvoiceKind.WebInvoice, DbType.Int32, ParameterDirection.Input);
parameter.Add("@Code", "Many_Insert_0", DbType.String, ParameterDirection.Input);
parameter.Add("@RowCount", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);

connection.Execute(sql,
    parameter,
    commandType: CommandType.StoredProcedure);

int rowCount = parameter.Get<int>("@RowCount");

// List
connection.Query<Invoice>(sql, new {Kind = new[] {InvoiceKind.StoreInvoice, InvoiceKind.WebInvoice}}).ToList();
// String
connection.Query<Invoice>(sql, new {Code = new DbString {Value = "Invoice_1", IsFixedLength = false, Length = 9, IsAnsi = true}}).ToList();
```

## Result

The result returned by queries method can be mapped to multiple types:

- [Anonymous](https://dapper-tutorial.net/result-anonymous)
- [Strongly Typed](https://dapper-tutorial.net/result-strongly-typed)
- [Multi-Mapping](https://dapper-tutorial.net/result-multi-mapping)
- [Multi-Result](https://dapper-tutorial.net/result-multi-result)
- [Multi-Type](https://dapper-tutorial.net/result-multi-type)

```cs
string sqlOrderDetails = "SELECT TOP 10 * FROM OrderDetails;";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{
    var anonymousList = connection.Query(sqlOrderDetails).ToList();
    var orderDetails = connection.Query<OrderDetail>(sqlOrderDetails).ToList();

    Console.WriteLine(anonymousList.Count);
    Console.WriteLine(orderDetails.Count);

    FiddleHelper.WriteTable(orderDetails);

    FiddleHelper.WriteTable(connection.Query(sqlOrderDetails).FirstOrDefault());
}
```
Try it: [.NET Core](https://dotnetfiddle.net/VPwBKR) | [.NET Framework](https://dotnetfiddle.net/EbR9BP)

## Utilities

- [Async](https://dapper-tutorial.net/async)
- [Buffered](https://dapper-tutorial.net/buffered)
- [Transaction](https://dapper-tutorial.net/transaction)
- [Stored Procedure](https://dapper-tutorial.net/stored-procedure)

```cs
// Async
connection.QueryAsync<Invoice>(sql)

// Buffered
connection.Query<Invoice>(sql, buffered: false)

// Transaction
using (var transaction = connection.BeginTransaction())
{
    var affectedRows = connection.Execute(sql,
    new {Kind = InvoiceKind.WebInvoice, Code = "Single_Insert_1"},
    commandType: CommandType.StoredProcedure,
    transaction: transaction);

    transaction.Commit();
}

// Stored Procedure
var affectedRows = connection.Execute(sql,
new {Kind = InvoiceKind.WebInvoice, Code = "Single_Insert_1"},
commandType: CommandType.StoredProcedure);
```

## DapperHelper.cs

```cs
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using MySql.Data.MySqlClient;

namespace ORMSuit.DAO {
    public class DapperHelper<T> {
        enum DBType {
            MSSQL,
            MySQL,
            SQLite
        }
        /// <summary>
        /// 数据库连接字符串
        /// </summary>
        private static string connectionString = "";

        /// <summary>
        /// MSSQL=0, MySQL=1, SQLite=2
        /// </summary>
        /// <param name="dbType"></param>
        public static int dbType = 0;

        /// <summary>
        /// 获取数据库连接
        /// </summary>
        /// <returns></returns>
        public static IDbConnection GetConnection () {
            switch ((DBType) dbType) {
                case DBType.MSSQL:
                    return new SqlConnection (connectionString);
                case DBType.MySQL:
                    connectionString = ConfigurationManager.ConnectionStrings["mysqlconn"].ConnectionString;
                    return new MySqlConnection (connectionString);
                case DBType.SQLite:
                    connectionString = ConfigurationManager.ConnectionStrings["sqliteconn"].ConnectionString;
                    return new SQLiteConnection (connectionString);
                default:
                    return new SqlConnection (connectionString);
            }
        }

        /// <summary>
        /// 查询列表
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static List<T> Query (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.Query<T> (sql, param).ToList ();
            }
        }

        /// <summary>
        /// 查询第一个数据
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static T QueryFirst (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                List<T> tempList = con.Query<T> (sql, param).ToList ();
                if (tempList != null && tempList.Count > 0) {
                    return tempList[0];
                } else {
                    return default;
                }
                //return con.QueryFirst<T>(sql, param);
            }
        }

        /// <summary>
        /// 查询第一个数据没有返回默认值
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static T QueryFirstOrDefault (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.QueryFirstOrDefault<T> (sql, param);
            }
        }

        /// <summary>
        /// 查询单条数据
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static T QuerySingle (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.QuerySingle<T> (sql, param);
            }
        }

        /// <summary>
        /// 数据是否存在
        /// </summary>
        /// <param name="sql">select count(*) from table where id=@id</param>
        /// <param name="param">new { id = 1 }</param>
        /// <returns></returns>
        public static bool Exists (string sql, object param = null) {
            object obj = ExecuteScalar (sql, param);
            int count = 0;
            if (obj == null) {
                count = 0;
            } else {
                count = Convert.ToInt32 (obj);
            }
            if (count > 0) {
                return true;
            } else {
                return false;
            }
        }

        /// <summary>
        /// 数据行数
        /// </summary>
        /// <param name="sql">select count(*) from table where id=@id</param>
        /// <param name="param">new { id = 1 }</param>
        /// <returns></returns>
        public static int RecordCount (string sql, object param = null) {
            object obj = ExecuteScalar (sql, param);
            int count = 0;
            if (obj == null) {
                count = 0;
            } else {
                count = Convert.ToInt32 (obj);
            }
            return count;
        }

        /// <summary>
        /// 查询单条数据没有返回默认值
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static T QuerySingleOrDefault (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.QuerySingleOrDefault<T> (sql, param);
            }
        }

        /// <summary>
        /// 增删改
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static int Execute (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.Execute (sql, param);
            }
        }

        /// <summary>
        /// Reader获取数据
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static IDataReader ExecuteReader (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.ExecuteReader (sql, param);
            }
        }

        #region 
        /// <summary>
        /// 获取DataTabel
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static DataTable ExecuteDataTabel (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return DataReaderToDataTable (con.ExecuteReader (sql, param));
            }
        }

        /// <summary>
        /// 获取DataSet
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static DataSet ExecuteDataSet (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return DataReaderToDataSet (con.ExecuteReader (sql, param));
            }
        }

        /// <summary>
        /// DataReader转DataTable
        /// </summary>
        /// <param name="dataReader"></param>
        /// <returns></returns>
        private static DataTable DataReaderToDataTable (IDataReader dataReader) {
            DataTable datatable = new DataTable ();
            for (int i = 0; i < dataReader.FieldCount; i++) {
                DataColumn myDataColumn = new DataColumn ();
                myDataColumn.DataType = dataReader.GetFieldType (i);
                myDataColumn.ColumnName = dataReader.GetName (i);
                datatable.Columns.Add (myDataColumn);
            }
            while (dataReader.Read ()) {
                DataRow myDataRow = datatable.NewRow ();
                for (int i = 0; i < dataReader.FieldCount; i++) {
                    myDataRow[i] = dataReader[i].ToString ();
                }
                datatable.Rows.Add (myDataRow);
                myDataRow = null;
            }
            dataReader.Close ();
            return datatable;
        }

        /// <summary>
        /// DataReader转DataSet
        /// </summary>
        /// <param name="reader"></param>
        /// <returns></returns>
        public static DataSet DataReaderToDataSet (IDataReader dataReader) {
            DataSet dataSet = new DataSet ();
            do {
                DataTable schemaTable = dataReader.GetSchemaTable ();
                DataTable dataTable = new DataTable ();
                if (schemaTable != null) {
                    for (int i = 0; i < schemaTable.Rows.Count; i++) {
                        DataRow dataRow = schemaTable.Rows[i];
                        string columnName = (string) dataRow["ColumnName"];
                        DataColumn column = new DataColumn (columnName, (Type) dataRow["DataType"]);
                        dataTable.Columns.Add (column);
                    }
                    dataSet.Tables.Add (dataTable);
                    while (dataReader.Read ()) {
                        DataRow dataRow = dataTable.NewRow ();
                        for (int i = 0; i < dataReader.FieldCount; i++) {
                            dataRow[i] = dataReader.GetValue (i);
                        }
                        dataTable.Rows.Add (dataRow);
                    }
                } else {
                    DataColumn column = new DataColumn ("RowsAffected");
                    dataTable.Columns.Add (column);
                    dataSet.Tables.Add (dataTable);
                    DataRow dataRow = dataTable.NewRow ();
                    dataRow[0] = dataReader.RecordsAffected;
                    dataTable.Rows.Add (dataRow);
                }
            }
            while (dataReader.NextResult ());
            return dataSet;
        }

        #endregion

        /// <summary>
        /// Scalar获取数据
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static object ExecuteScalar (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.ExecuteScalar (sql, param);
            }
        }

        /// <summary>
        /// Scalar获取数据
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static T ExecuteScalarForT (string sql, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                return con.ExecuteScalar<T> (sql, param);
            }
        }

        /// <summary>
        /// 带参数的存储过程
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public static List<T> ExecutePro (string proc, object param = null) {
            using (IDbConnection con = GetConnection ()) {
                List<T> list = con.Query<T> (proc,
                    param,
                    null,
                    true,
                    null,
                    CommandType.StoredProcedure).ToList ();
                return list;
            }
        }

        /// <summary>
        /// 多条SQL批量执行
        /// </summary>
        /// <param name="Key">多条SQL</param>
        /// <param name="Value">SQL对应实体</param>
        /// <returns></returns>
        public static int ExecuteTransaction (Dictionary<string, object> dic) {
            using (IDbConnection con = GetConnection ()) {
                using (var transaction = con.BeginTransaction ()) {
                    try {
                        int result = 0;
                        foreach (var sql in dic) {
                            result += con.Execute (sql.Key, sql.Value, transaction);
                        }

                        transaction.Commit ();
                        return result;
                    } catch (Exception ex) {
                        transaction.Rollback ();
                        return 0;
                    }
                }
            }
        }

        /// <summary>
        /// 批量增删改 带事务
        /// </summary>
        /// <param name="sql">单SQL</param>
        /// <param name="object">实体列表</param>
        /// <returns></returns>
        public static int ExecuteTransaction (string sql, object obj) {
            using (IDbConnection con = GetConnection ()) {
                con.Open ();
                using (IDbTransaction transaction = con.BeginTransaction ()) {
                    try {
                        int result = 0;
                        result = con.Execute (sql, obj, transaction);
                        transaction.Commit ();
                        con.Close ();
                        return result;
                    } catch (Exception ex) {
                        transaction.Rollback ();
                        con.Close ();
                        return 0;
                    }
                }
            }
        }

        /// <summary>
        /// 异步批量增删改 带事务 
        /// </summary>
        /// <param name="sql">单SQL</param>
        /// <param name="object">实体列表</param>
        /// <returns></returns>
        public static Task<int> ExecuteTransactionAsync (string sql, object obj) {
            using (IDbConnection con = GetConnection ()) {
                con.Open ();
                using (IDbTransaction transaction = con.BeginTransaction ()) {
                    try {
                        Task<int> result;
                        result = con.ExecuteAsync (sql, obj, transaction);
                        transaction.Commit ();
                        con.Close ();
                        return result;
                    } catch (Exception ex) {
                        transaction.Rollback ();
                        con.Close ();
                        return null;
                    }
                }
            }
        }
    }
}
```
