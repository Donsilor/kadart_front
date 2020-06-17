export default function({
  req,
  res,
  redirect,
  store,
  route
}) {
  if (process.server) {
	  // var host = req.getRequestURL().toString();
	  // console.log(77889,host)
	  
	var host = req.headers.host;
    var url = req.url;

	if(host && url){
	  var url = 'https://'+host+url

      redirect(url)
      return
    }
  }
}
