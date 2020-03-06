export default function({
  req,
  res,
  redirect,
  store,
  route
}) {
  function isWap(u) {
    // var u = navigator.userAgent, app = navigator.appVersion;
    return !u.match(/AppleWebKit.*Mobile.*/)
  }

  if (process.server) {

    let u = req.headers['user-agent']

    // console.log('headerHost',headerHost);

    if (isWap(u)) {
      return
    }
    // return

    //头部host
    let headerHost = req.headers['host']
    //生产环境
    let host = 'https://wap.kadart.bddia.com';
    if (!(/bddia\.com/).test(headerHost)) {
      //测试环境
      host = 'http://wap.kadart.bddia.com';
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
