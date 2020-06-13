export default function({
  req,
  res,
  redirect,
  store,
  route
}) {
  if (process.server) {
    var location = req.headers.referer;

    var protocol,path,url;
    if(location){
      protocol = req.headers.referer.split('://')[0],
      path = req.headers.referer.split('://')[1];

      if (protocol != 'https') {
        url = 'https://' + path;
      }

      redirect(url)
      return
    }
  }
}
