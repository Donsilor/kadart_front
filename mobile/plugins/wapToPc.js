// function IsPC() {
//   var userAgentInfo = navigator.userAgent;
//   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
//   var flag = true;
//   for (var v = 0; v < Agents.length; v++) {
//     if (userAgentInfo.indexOf(Agents[v]) > 0) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }

if (!process.server) {
  var ifPcBrowser = false;
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    ifPcBrowser = false;
  } else if (/(Android)/i.test(navigator.userAgent)) {
    ifPcBrowser = false;
  } else {
    ifPcBrowser = true;
  };

  var host = location.host;
  if (!(/wap-kadart/).test(host)) {
    //测试环境
    host = 'http://www-kadart.bddco.cn';
  }else{
    //生产环境
    host = 'https://www.kadart.com';
  }

  var href = location.href;
  if(href.indexOf('?') == -1){
    var path = location.pathname;
    if(path != '/leave-message'){
      host = host + path;
    }
  }

  if(ifPcBrowser){
    location.href = host;
  }

}
