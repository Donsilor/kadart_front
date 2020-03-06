export default function({
  req,
  res,
  redirect,
  store,
  route
}) {
  function isWap(u) {
    // var u = navigator.userAgent, app = navigator.appVersion;
    return !!u.match(/AppleWebKit.*Mobile.*/)
  }

  if (process.server) {

    if(req){
      let u = req.headers['user-agent']
    }else{
      return
    }

    // console.log('headerHost',headerHost);

    if (isWap(u)) {
      return
    }
    // return

    //头部host
    if(req){
      let headerHost = req.headers['host']
    }else{
      return
    }
    //生产环境
    let host = 'https://www.kadart.com';
    if (!(/kadart\.com/).test(headerHost)) {
      //测试环境
      host = 'http://www.kadart.bddia.com';
    }
    const toWapUrl = path => {
      host = host + path;

      redirect(host)
      return
    }
    // console.log("req.originalUrl", req.originalUrl)
    toWapUrl(req.originalUrl)
  }
}
