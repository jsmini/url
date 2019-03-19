# 文档
这是一个url解析库

## parse
将url字符串解析为url对象

函数参数和返回值

- param {string} url 待解析的url
- param {boolean|object} [parseQueryString=false] 是否将参数部分解析为对象，如果为对象，将作为参数传递给querystring
- return {object} 返回解析好的对象

举个例子

```js
jsmini_url.parse('http://yanhaijing.com?a=1')
// 输出：
// {
//     hash: ""
//     host: "yanhaijing.com"
//     hostname: "yanhaijing.com"
//     href: "http://yanhaijing.com?a=1"
//     origin: "http://yanhaijing.com"
//     path: "?a=1"
//     pathname: ""
//     port: ""
//     protocol: "http:"
//     query: "a=1"
//     search: "?a=1"
// }

jsmini_url.parse('http://yanhaijing.com?a=1', true)

// 输出：
// {
//     hash: ""
//     host: "yanhaijing.com"
//     hostname: "yanhaijing.com"
//     href: "http://yanhaijing.com?a=1"
//     origin: "http://yanhaijing.com"
//     path: "?a=1"
//     pathname: ""
//     port: ""
//     protocol: "http:"
//     query: { a: 1 } // 注意这里的区别
//     search: "?a=1"
// }
```

## format
将url对象，格式化为url字符串

函数参数和返回值

- param {object} urlObj parse返回格式的对象
- param {object} [stringifyQueryString={}] 传递给qs stringify的参数
- return {string} 格式化的字符串

举个例子

```js
jsmini_url.parse({
    hash: ""
    host: "yanhaijing.com"
    hostname: "yanhaijing.com"
    href: "http://yanhaijing.com?a=1"
    origin: "http://yanhaijing.com"
    path: "?a=1"
    pathname: ""
    port: ""
    protocol: "http:"
    query: "a=1"
    search: "?a=1"
})
// 输出：'http://yanhaijing.com?a=1'
```
