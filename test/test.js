var expect = require('expect.js');

var parse = require('../dist/index.js').parse;
var format = require('../dist/index.js').format;

describe('单元测试', function() {
    this.timeout(1000);

    describe('parse', function() {
        it('bad case', function() {
            var a = parse('javascript: void');
            expect(a.href).to.equal('javascript: void');

            var a = parse('#');
            expect(a.href).to.equal('#');

            var a = parse('');
            expect(a.href).to.equal('');

            var a = parse('/a/b/c');
            expect(a.href).to.equal('/a/b/c');
        })
        it('normal', function() {
            var a = parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

            expect(a.hash).to.equal('#hash');
            expect(a.host).to.equal('host.com:8080');
            expect(a.hostname).to.equal('host.com');
            expect(a.href).to.equal('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
            expect(a.origin).to.equal('http://user:pass@host.com:8080');
            expect(a.path).to.equal('/p/a/t/h?query=string');
            expect(a.pathname).to.equal('/p/a/t/h');
            expect(a.port).to.equal('8080');
            expect(a.protocol).to.equal('http:');
            expect(a.query).to.equal('query=string');
            expect(a.search).to.equal('?query=string');
        });

        it('parseQueryString', function() {
            var a = parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true);
            expect(a.query.query).to.equal('string');
        });
    });

    describe('format', function() {
        it('normal', function() {
            var a = format({
                auth: "user:pass",
                hash: "#hash",
                host: "host.com:8080",
                hostname: "host.com",
                href: "http://user:pass@host.com:8080/p/a/t/h?query=string#hash",
                origin: "http://user:pass@host.com:8080",
                path: "/p/a/t/h?query=string",
                pathname: "/p/a/t/h",
                port: "8080",
                protocol: "http:",
                query: "query=string",
                search: "?query=string",
            });
            expect(a).to.equal('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
        });
    });
});
