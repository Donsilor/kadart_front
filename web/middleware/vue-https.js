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

		var location = req.headers.referer;

		if (location) {
			var protocol, path, url;
			protocol = req.headers.referer.split('://')[0],
				path = req.headers.referer.split('://')[1];

			if (protocol != 'https') {
				url = 'https://' + path;

        console.log('进入if')
        console.log('protocol=',protocol)
        console.log('url=',url)
        
				redirect(url)
				return
			}
		} else {
			var host = req.headers.host;
			var url = req.url;

			if (host && url) {
				var url = 'https://' + host + url

        console.log('进入else')
        console.log('url=',url)
        
				redirect(url)
				return
			}
		}
	}
}
