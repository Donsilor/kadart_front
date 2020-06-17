export default function({
	req,
	res,
	redirect,
	store,
	route
}) {
	if (process.server) {
		var location = req.headers.referer;

		if (location) {
			var protocol, path, url;
			protocol = req.headers.referer.split('://')[0],
				path = req.headers.referer.split('://')[1];

			if (protocol != 'https') {
				url = 'https://' + path;

				redirect(url)
				return
			}
		} else {
			var host = req.headers.host;
			var url = req.url;

			if (host && url) {
				var url = 'https://' + host + url

				redirect(url)
				return
			}
		}
	}
}
