/**
 * @file 命令行
 *
 * @author z.w(weger)
 */



var fs = require('fs');
var pkgJSON = require('../package.json');
var exec = require('child_process').exec;


/**
 * 拼装exec
 *
 * @param {Array} args 参数列表
 */
exports.readPackageJson = function readPackageJson() {
    console.log(require('./package.json'));
};


/**
 * 解析参数
 *
 * @param {Array} args 参数列表
 */
exports.parse = function (args) {
    args = require('minimist')(args.slice(2));

    var themes = ['neon', 'andes', 'breeze', 'candy', 'fine-blue', 'matrix', 'moria', 'vampire', 'zellner', 'zenburn'];
    var languages = ['html', 'js', 'css', 'html', 'php', 'java'];
    var execCmd = 'pbpaste | highlight --syntax={language} --style={style} --out-format=rtf | pbcopy';


    console.log(args);
    if (args.length === 0) {
        var child = exec('pbpaste | highlight --syntax=js --out-format=rtf --style=zenburn | pbcopy', function (error, stdout, stderr) {
            console.log('Success!' + stdout);
            if (error !== null) {
                console.log('Error: ' + error);
            }
        });
    }

    if (args.help || args.h) {
        var str = '\n  Usage: hcfk [type] [options] \n\n'
                + '  type: \n'
                + '    specify type of source code\n'
                + '    [html|js|css|html|php|java...]\n\n'
                + '  Options: \n'
                + '    -s,--style,       set colour style (theme) \n'
                + '                      [neon|andes|breeze|candy...] \n'
                + '    -h, --help        output usage information \n'
                + '    -v, --version     output the version number \n';
        console.log(str);
    }

    if (args.v || args.version) {
        console.log(pkgJSON.version);
    }

    var style = args.s || args.style;
    if (style && themes.indexOf(style)) {
        execCmd = execCmd.replace('{style}', style);
    }

    var language = args._;
    if (language[0] && languages.indexOf(language)) {
        execCmd = execCmd.replace('{language}', language[0]);
    }

    // set default
    execCmd = execCmd.replace('{style}', themes[0]);
    execCmd = execCmd.replace('{language}', languages[0]);

    console.log(execCmd);
};

if (module === require.main) {
    exports.parse(process.argv);
}
