/**
 * @file cli.test.js
 *
 * @author z.w(weger)
 * @description
 *   lib/cli.js的测试用例
 */



var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('cli', function () {
    it('has parse function', function () {
        var cli = require('../lib/cli');
        assert.typeOf(cli.parse, 'function');
    });
});

describe('parse args', function () {
    var cli;
    beforeEach(function () {
        cli = require('../lib/cli');
    });
    describe('empty arg', function () {
        it('should return success', function () {
            expect(cli.parse(['', '', ''])).to.equal('Success!');
        });
    });
    describe('-help or -h', function () {
        it('should exec hclk.help', function () {
            expect(cli.parse(['', '', '-h'])).to.be.empty;
            expect(cli.parse(['', '', '-help'])).to.be.empty;
        });
    });
    describe('-version or -v', function () {
        it('should output hcfk version', function () {
            expect(cli.parse(['', '', '-v'])).to.be.empty;
            expect(cli.parse(['', '', '-version'])).to.be.empty;
        });
    });
});
