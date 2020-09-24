var touchMeTimes = 0;
function dontTouchMe() {
  var touchMeMsg = "";
  switch (touchMeTimes) {
    case 0:
      touchMeMsg = "憋点我，再点我就吃了你~"
      break;
    case 1:
      touchMeMsg = "你还点。。。造反了不成？"
      break;
    case 2:
      touchMeMsg = "。。。。。。"
      break;
    case 3:
      touchMeMsg = "你还点。。。"
      break;
    case 4:
      touchMeMsg = "算啦。。。给你点。。。。。。"
      break;
    default:
      touchMeMsg = "小伙汁，你已经点我" + touchMeTimes + "次了。。。"
      break;
  }
  touchMeTimes++;
  console.log("%c " + touchMeMsg, "color: #fadfa3; background: #030307; padding:5px 0;font-family: 微软雅黑;")
}
(function ($) {
  var pd_spans = $("span[name='pd_title']")
  pd_spans.each(idx => {
    setTimeout(function () {
      $(pd_spans[idx]).addClass("animate-in")
    }, 120 * idx)
  });
})(jQuery);

