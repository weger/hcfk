/**
 * @file 命令行
 *
 * @author z.w(weger)
 */



var fs = require('fs');
var pkgJSON = require('../package.json');
var exec = require('child_process').exec;


/**
 * 执行命令
 *
 * @param {string} cmd 指令串
 */
function runCommand(cmd) {
    exec(cmd, function (error, stdout, stderr) {
        console.log('Success!' + stdout);
        if (error !== null) {
            console.log('Error: ' + error);
        }
    });
}


/**
 * 解析参数
 *
 * @param {Array} args 参数列表
 */
exports.parse = function (args) {
    args = require('minimist')(args.slice(2));

    var themes = [
        'neon', 'andes', 'breeze', 'candy', 'fine-blue', 'matrix', 'moria',
        'vampire', 'zellner', 'zenburn'];
    var languages = [
        'html', 'js', 'css', 'less', 'saas', 'lua', 'xml', 'php',
        'java', 'jsp', 'bat', 'clojure', 'c', 'dart', 'go', 'python', 'ruby',
        'scala', 'scss', 'sql', 'swift'];
    var execCmd = 'pbpaste | highlight --syntax={language} --style={style} --out-format=rtf | pbcopy';

    if (args.length === 0) {
        runCommand('pbpaste | highlight --syntax=js --out-format=rtf --style=zenburn | pbcopy');

        return;
    }

    if (args.help || args.h) {
        var str = '\n  Usage: hcfk [type] [options] \n\n'
                + '  type: \n'
                + '    specify type of source code\n'
                + '    [html|js|css|python|ruby|php|java|c|go...]\n\n'
                + '  Options: \n'
                + '    -s,--style,       set colour style (theme) \n'
                + '                      [neon|andes|breeze|candy...] \n'
                + '    -h, --help        output usage information \n'
                + '    -v, --version     output the version number \n';
        console.log(str);
        return;
    }

    if (args.v || args.version) {
        console.log(pkgJSON.version);
        return;
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

    runCommand(execCmd);
};

if (module === require.main) {
    exports.parse(process.argv);
}
