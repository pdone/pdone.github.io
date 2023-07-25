var touchMeTimes = 0;
function dontTouchMe() {
    var e = "";
    switch (touchMeTimes) {
        case 0: e = "憋点我，再点我就吃了你~";
            break;
        case 1: e = "你还点。。。造反了不成？";
            break;
        case 2: e = "。。。。。。";
            break;
        case 3: e = "你还点。。。";
            break;
        case 4: e = "算啦。。。给你点。。。。。。";
            break;
        default: e = "小伙汁，你已经点我" + touchMeTimes + "次了。。。"
    }
    touchMeTimes++, console.log("%c " + e, "color: #fadfa3; background: #030307; padding:5px 0;font-family: 微软雅黑;")
}
$((function () { var e = $("span[name='pd_title']"); e.each((a => { setTimeout((function () { $(e[a]).addClass("animate-in") }), 120 * a) })), document.body.style.height = "auto" }));
