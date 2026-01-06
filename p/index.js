document.addEventListener('DOMContentLoaded', function () {
    // 获取URL的查询参数
    function getQueryParam(param) {
        var queryParams = new URLSearchParams(window.location.search);
        return queryParams.get(param);
    }

    // 根据查询参数获取数据
    function displayData() {
        var title = getQueryParam('t') ?? getQueryParam('title');
        if (title) {
            document.getElementById('title').textContent = title;
            document.title = title;
        }

        var content = getQueryParam('c') ?? getQueryParam('content');
        if (content) {
            // 将换行符替换为 <br>
            document.getElementById('content').innerHTML = content.replace(/\r?\n/g, '<br>');
            document.getElementById('extend').textContent = "";
        }

        var extend = getQueryParam('e') ?? getQueryParam('extend');
        if (extend) {
            extend = decodeURIComponent(extend);
            extend = extend.replace(/\r?\n/g, '<br>');
            document.getElementById('extend').textContent = extend;
        }
    }

    // 调用函数以显示数据
    displayData();
});