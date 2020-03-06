const middleware = {}

middleware['pcToWap'] = require('..\\middleware\\pcToWap.js')
middleware['pcToWap'] = middleware['pcToWap'].default || middleware['pcToWap']

export default middleware
