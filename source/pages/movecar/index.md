---
layout: page
title: 联系车主挪车
date: 2021-06-05
---

<div itemprop="articleBody" style="display: flex; justify-content: center; align-items: center;"><span style="font-size: 1.5rem;"><a id="btnCall" class="button" style="border-radius: 2em;" href="tel:114" title="拨打号码" data-pjax-state="external"><i class="fa fa-phone">&nbsp;</i>拨打号码</a></span></div>
<script src="https://cdn.jsdelivr.net/npm/js-base64@3.6.1/base64.min.js"></script>
<script>
function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
(function(){
  //手机号
  var tel = getQueryVariable("tel");
  //是否在页面上显示手机号
  var show = getQueryVariable("show");
  //从URL获取手机号失败
  if (tel == false) {
    tel = window.location.search.substr(1);
    if (tel == "") return;
    try {
      tel = Base64.decode(tel);
    } 
    catch (e) 
    {
      console.log("%c Base64解密失败，请把下方内容发送给开发者", "color: #d0021b; padding:5px 0;font-family: 微软雅黑;");
      console.log(e);
      return;
    }
    //Base64模式下强制显示手机号码
    show = 1;
  }
  //手机号长度不正确返回
  if (tel.length < 11 ) return;
  if (show == 1)
  {
    var num1 = tel.substr(0,3);
    var num2 = tel.substr(3,4);
    var num3 = tel.substr(7,4);
    document.getElementsByClassName("p center logo large")[0].innerText = num1 + " " + num2 + " " + num3;
  }
  else
  {
    document.getElementsByClassName("p center logo large")[0].innerText = "";
  }
  document.getElementById("btnCall").setAttribute("href", "tel:" + tel.substr(0,11));
})();
</script>