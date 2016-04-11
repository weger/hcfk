/**
 * @file 命令行
 *
 * @author z.w(weger)
 */


var fs = require('fs');
var exec = require('child_process').exec;


/**
 * 解析参数
 *
 * @param {Array} args 参数列表
 */
exports.parse = function (args) {
    args = args.slice(2);

    if (args.length === 0) {
        var child = exec('pbpaste | highlight -S js -O rtf | pbcopy', function (error, stdout, stderr) {
            console.log('Success!' + stdout);
            if (error !== null) {
                console.log('Error: ' + error);
            }
        });
    }

    if (args[0] === '--version' || args[0] === '-v') {
        return '0.0.1';
    }

};





if ( module === require.main ) {
    exports.parse( process.argv );
}
