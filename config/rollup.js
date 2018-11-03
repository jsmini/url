var pkg = require('../package.json');

// 兼容 url 和 @jsmini/url，@jsmini/url 替换为 jsmini_url
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * url ${version} (https://github.com/jsmini/url)
 * API https://github.com/jsmini/url/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/url/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
