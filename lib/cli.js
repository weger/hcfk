/**
 * @file 命令行
 *
 * @author z.w(weger)
 */


var hcfk = require('./hcfk');

/**
 * 解析参数
 *
 * @param {Array} args 参数列表
 */
exports.parse = function (args) {
    args = require('minimist')(args.slice(2));

    if (args.length === 0) {
        hcfk.exec(args);
        return;
    }

    if (args.help || args.h) {
        hcfk.help();
        return;
    }

    if (args.v || args.version) {
        hcfk.version();
        return;
    }

    hcfk.exec(args);
};

if (module === require.main) {
    exports.parse(process.argv);
}
