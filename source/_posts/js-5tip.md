---
title: 5个小技巧让你写出更好的JavaScript条件语句
date: 2018-10-18
tags: [JS]
categories: Developer
---

> 原文地址：[5 Tips to Write Better Conditionals in JavaScript](https://scotch.io/tutorials/5-tips-to-write-better-conditionals-in-javascript#toc-1-use-array-includes-for-multiple-criteria)
> 原文作者：[Jecelyn Yeen](https://scotch.io/@jecelyn)
> 翻译&校对：[pdone](https://pdoner.cn)

<!--more-->

## 1.在条件较多时使用 Array.includes
举个栗子：

```js
// condition
function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {
    console.log('red');
  }
}
```

乍一看，上面的例子看起来不错。 但是，如果我们有更多的红色水果，比如樱桃和蔓越莓呢？ 我们是否要用更多的`||`来扩展语句？

我们可以使用`Array.includes`重写上面的条件。

```js
function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    console.log('red');
  }
}
```

我们将`红色水果（条件）`整合到一个数组中。这样做可以让代码看起来更整洁。

## 2.减少嵌套，尽早返回

让我们扩展前面的示例，增加另外两个条件：
——如果没有提供水果，抛出错误；
——如果超过10种水果，打印出水果数量。

```js
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  // condition 1: fruit must has value
  if (fruit) {
    // condition 2: must be red
    if (redFruits.includes(fruit)) {
      console.log('red');

      // condition 3: must be big quantity
      if (quantity > 10) {
        console.log('big quantity');
      }
    }
  } else {
    throw new Error('No fruit!');
  }
}

// test results
test(null); // error: No fruits
test('apple'); // print: red
test('apple', 20); // print: red, big quantity
```

看看上面的代码，我们有：
­——1个`if / else`语句过滤掉无效条件；
——3层嵌套if语句（条件1,2和3）。
对我而言，我遵循的规则是在发现无效条件时提前返回。

```js
/* return early when invalid conditions found */

function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  // condition 1: throw error early
  if (!fruit) throw new Error('No fruit!');

  // condition 2: must be red
  if (redFruits.includes(fruit)) {
    console.log('red');

    // condition 3: must be big quantity
    if (quantity > 10) {
      console.log('big quantity');
    }
  }
}
```
这样做的话，我们会得到一个较少层级的嵌套语句。 这种编码风格很好，特别是当你有很长的if语句时（想象你需要滚动到最底层才知道这里有一个else语句，一点都不酷）。

通过反转条件并提前返回，我们可以进一步减少嵌套。 请查看下面的条件2，看看我们是如何做到的：
```js
/* return early when invalid conditions found */

function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early
  if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

  console.log('red');

  // condition 3: must be big quantity
  if (quantity > 10) {
    console.log('big quantity');
  }
}
```
通过反转条件2，我们的代码现在没有嵌套语句。 当我们有很长的逻辑时，这种技巧非常有用，我们希望在不满足条件时停止下一步的处理。

但是这并不是硬性规定。问问自己，这个版本（没有嵌套）是否比前一个版本（条件2嵌套）更好、更可读？

对我而言，我会保留（条件2嵌套）这个版本，因为：
——代码简短直接，一个if语句是代码结构更清晰；
——反转条件可能会引发更多的思考过程（增加认知负荷）。

因此，始终追求更少的嵌套和尽早的返回，但不要过度。如果你感兴趣的话，这里有篇关于这个问题的文章以及 StackOverflow 上的讨论：

[Avoid Else, Return Early](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) by Tim Oxley

[StackOverflow discussion](https://softwareengineering.stackexchange.com/questions/18454/should-i-return-from-a-function-early-or-use-an-if-statement) on if/else coding style

## 3.使用函数默认参数和解构

我想下面的代码可能看起来很熟悉，我们总是需要检查`null / undefined`值并给参数赋予默认值：

```js
function test(fruit, quantity) {
  if (!fruit) return;
  const q = quantity || 1; // if quantity not provided, default to one

  console.log(`We have ${q} ${fruit}!`);
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

实际上，我们可以通过设置函数的默认参数来省去参数`q`：

```js
function test(fruit, quantity = 1) { // if quantity not provided, default to one
  if (!fruit) return;
  console.log(`We have ${quantity} ${fruit}!`);
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

更简单直观不是吗？ 请注意，函数的每个参数都可以有自己的默认值。 例如，我们也可以为`水果`分配默认值：

```js
function test (fruit ='unknown', quantity = 1)
```

如果我们的`水果`是一个`对象（Object）`怎么办？ 我们可以指定默认参数吗？

```js
function test(fruit) { 
  // printing fruit name if value provided
  if (fruit && fruit.name)  {
    console.log (fruit.name);
  } else {
    console.log('unknown');
  }
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

观察上边的例子，水果的`name`属性存在时，我们会将它打印出来，否则打印`'unknown'`。我们可以通过默认参数和解构赋值的方法来避免写出 `fruit && fruit.name` 这种条件。

```js
// destructing - get name property only
// assign default empty object {}
function test({name} = {}) {
  console.log (name || 'unknown');
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

由于我们只需要来自fruit的`name`属性，我们可以使用`{name}`将其解构出来，然后我们可以在代码中使用`name`作为变量而不是`fruit.name`。

我们还使用空对象`{}`作为默认值。 如果我们不这样做，你将在执行遇到错误`test(undefined) - Cannot destructure property name of 'undefined' or 'null'`。 因为`undefined`中没有`name`属性。

如果你不介意使用第三方库，有几种方法可以减少空值检查：
——使用 [Lodash get](https://lodash.com/docs/4.17.10#get) 函数；
——使用 Facebook 开源的 [idx](https://github.com/facebookincubator/idx) 库（需搭配 Babeljs）。
这里有一个使用 Lodash 的例子：

```js
// Include lodash library, you will get _
function test(fruit) {
  console.log(__.get(fruit, 'name', 'unknown'); // get property name, if not available, assign default value 'unknown'
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

您可以[点击这里](http://jsbin.com/bopovajiye/edit?js,console)运行演示代码。 此外，如果您是功能编程（FP）的粉丝，您可以选择使用[Lodash fp](https://github.com/lodash/lodash/wiki/FP-Guide)，Lodash的功能版本（方法更改为get或getOr）。

## 4.相较Switch更偏向于使用Map / Object

让我们看看下面的例子，我们想根据颜色打印水果：

```js
function test(color) {
  // use switch case to find fruits in color
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

//test results
test(null); // []
test('yellow'); // ['banana', 'pineapple']
```

上面的代码似乎没有错，但我觉得它很冗长。 使用具有更清晰语法的object literal可以实现相同的结果：

```js
// use object literal to find fruits in color
  const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
  };

function test(color) {
  return fruitColor[color] || [];
}
```

或者，你可以使用Map来实现相同的结果：

```js
// use Map to find fruits in color
  const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```

Map是ES2015引入的对象类型，允许你存储键值对。

我们应该禁止使用switch语句吗？ 不要局限于此。 就个人而言，我尽可能使用object literal，但我不会设置硬性规则来阻止使用Switch，视使用场景而定。

Todd Motto有一篇文章深入研究switch语句与对象文字，你可以[点击这里](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/)阅读。

### TL；DR；重构方法

对于上面的示例，我们实际上可以重构我们的代码以使用Array.filter实现相同的结果。

```js
 const fruits = [
    { name: 'apple', color: 'red' }, 
    { name: 'strawberry', color: 'red' }, 
    { name: 'banana', color: 'yellow' }, 
    { name: 'pineapple', color: 'yellow' }, 
    { name: 'grape', color: 'purple' }, 
    { name: 'plum', color: 'purple' }
];

function test(color) {
  // use Array filter to find fruits in color

  return fruits.filter(f => f.color == color);
}
```

解决问题的方法永远不只一种。对于这个例子我们展示了四种实现方法。编程真有趣！

## 5.使用 Array.every 和 Array.some 来处理全部/部分满足条件

最后一个小技巧更多地是关于使用新的（也不是很新了）JavaScript 数组函数来减少代码行数。观察以下的代码，我们想要检查是否所有的水果都是红色的：

```js
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  let isAllRed = true;

  // condition: all fruits must be red
  for (let f of fruits) {
    if (!isAllRed) break;
    isAllRed = (f.color == 'red');
  }

  console.log(isAllRed); // false
}
```

代码太长了！ 我们可以使用`Array.every`减少行数：

```js
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  // condition: short way, all fruits must be red
  const isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
}
```

现在是不是整洁了许多？ 以类似的方式，如果我们想测试是否至少有一个水果为红色，我们可以使用Array.some用一行代码实现它。

```js
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
];

function test() {
  // condition: if any fruit is red
  const isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
}
```

让我们一起编写可读性更高的代码。 我希望你能在本文中学到一些新东西。

就这样。 快乐的编码！
