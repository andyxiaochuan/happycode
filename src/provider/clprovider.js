const vscode = require('vscode');
const coderBuild = require('../logic/index.js')

/**
 * 自动提示实现，这里模拟一个很简单的操作
 * 当输入 this.dependencies.xxx时自动把package.json中的依赖带出来
 * 当然这个例子没啥实际意义，仅仅是为了演示如何实现功能
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */
function provideCompletionItems(document, position, token, context) {
    // let editor = vscode.window.activeTextEditor
	// let sel = editor.selection;
    // let abbr = document.getText();
   
    let rang = document.getWordRangeAtPosition(position)
    let txt = document.getText(rang)
    // const line        = document.lineAt(position);
    // const projectPath = util.getProjectPath(document);
    console.log('进入回调')
    // 只截取到光标位置为止，防止一些特殊情况
    // const lineText = line.text.substring(0, position.character);
    // console.log(lineText)
    // 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
    // if(/(^|=| )\w+\.dependencies\.$/g.test(lineText)) {
    //     const json = require(`${projectPath}/package.json`);
       
    // }
    let comp = new vscode.CompletionItem(txt, vscode.CompletionItemKind.Snippet)
    comp.insertText = coderBuild(txt)
    return [comp];

    // const dependencies = ['gaochuan()/n/r(){}\n\r','nihao']
    // return dependencies.map(dep => {
    //   console.log(222222)
    //     // vscode.CompletionItemKind 表示提示的类型
    // })
}

/**
 * 光标选中当前自动补全item时触发动作，一般情况下无需处理
 * @param {*} item 
 * @param {*} token 
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    // 注册代码建议提示，只有当按下“.”时才触发
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems,
        resolveCompletionItem
    },['.']));
};