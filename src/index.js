import {isObject} from '@jsmini/is';

import {parse as parseQs} from '@jsmini/querystring';

export function parse(url, parseQueryString = false) {
    url = String(url);
    parseQueryString = !!parseQueryString;

    // http://user:pass@host.com:8080/p/a/t/h?query=string#hash
    const temp = url
        .match(/^([^:\/?#]+:)?\/\/(?:([^:@]*:[^:@]*)@)?([^:\/?#]+)(?:\:(\d*))?([^?#]*)(?:\?([^#]*))?(#(?:.*))?$/);

    // 匹配失败
    // 1: javascript: void 2: # 3: '' 4: 相对url
    if (!temp) {
        return {
            href: url
        }
    }

    const res = {
        href: url,
        protocol: temp[1] || '',
        auth: temp[2] || '',
        hostname: temp[3] || '',
        port: temp[4] || '',
        pathname: temp[5] || '',
        query: temp[6] || '',
        hash: temp[7] || ''
    };

    res.host = res.hostname + (res.port ? ':' : '') + res.port;

    res.search = (res.query ? '?' : '') + res.query;

    res.path = res.pathname + res.search;

    res.origin = res.protocol + '//' + res.auth + (res.auth ? '@' : '') + res.host;

    res.query = parseQueryString ? parseQs(res.query) : res.query;

    return res;
}

export function format(urlObj) {
    if (!isObject(urlObj)) {
        throw new TypeError('first param must is object');
    }

    const protocol = urlObj.protocol || '';
    const auth = urlObj.auth || '';
    const hostname = urlObj.hostname || '';
    const port = urlObj.port || '';
    const pathname = urlObj.pathname || '';
    const query = urlObj.query || '';
    const hash = urlObj.hash || '';

    const res = protocol + '//' + auth + (auth ? '@' : '')
        + hostname + (port ? ':' : '') + port
        + pathname + (query ? '?' : '') + query + hash;

    return res === '//' ? urlObj.href : res; // backup 全部为空的bug
}
