/**
 * @file hcfk.test.js
 *
 * @author z.w(weger)
 * @description
 *   lib/hcfk.js的测试用例
 */

var hcfk = require('../lib/hcfk');


var chai = require('chai');
var expect = chai.expect;

describe('version', function () {
    it('output v...', function () {
        expect(hcfk.version).is.be.a('function');
        expect(hcfk.version()).is.be.empty;
    });
});

describe('help', function () {
    it('output v...', function () {
        expect(hcfk.version).is.be.a('function');
        expect(hcfk.version()).is.be.empty;
    });
});

describe('exec', function () {
    it('is function', function () {
        expect(hcfk.exec).is.be.function;
    });

    it('arguments is empty', function () {
        expect(hcfk.exec()).is.be.function;
    });

    it('argument is "html -s neon"', function () {
        expect(hcfk.exec({_: true})).is.be.function;
        expect(hcfk.exec({_: 'html', 's': 'neon'})).is.be.function;
    });
});
