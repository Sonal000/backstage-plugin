'use strict';

var _package = require('../package.json.cjs.js');
var userAgent$1 = require('./userAgent.cjs.js');
var httpsProxyAgent = require('https-proxy-agent');
var fetch = require('node-fetch');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var fetch__default = /*#__PURE__*/_interopDefaultCompat(fetch);

const userAgent = userAgent$1.getUserAgent();
const agent = process.env.HTTPS_PROXY ? new httpsProxyAgent.HttpsProxyAgent(process.env.HTTPS_PROXY) : void 0;
const dtFetch = (url, identifier, options = {}) => {
  options.headers = {
    ...options.headers,
    "User-Agent": userAgent,
    Referer: `backstage-plugin@${_package.default.version}/${identifier}`
  };
  return fetch__default.default(url, { ...options, agent });
};

exports.dtFetch = dtFetch;
//# sourceMappingURL=dtFetch.cjs.js.map
