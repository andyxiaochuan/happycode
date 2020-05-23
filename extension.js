// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// console.log(compr)
	console.log('Congratulations, your extension "codehappy" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	vscode.workspace.onDidChangeTextDocument((e)=>{
		console.log('onDidChangeActiveTextEditor------',e)
		
		let rang = e.document.getWordRangeAtPosition( e.contentChanges[0].range)
		let txt = e.document.getText(rang)
		console.log('lllllllll', txt)
		// if(e.contentChanges[0].text == "    "){
		// 	console.log('table -------------',e.document.getText())
		// }
	})
	
	let disposable = vscode.commands.registerCommand('extension.happycode', function () {
		// The code you place here will be executed every time your command is executed
		
		// require('./src/provider/clprovider')(context);
		vscode.window.showInformationMessage('happycode is working');
	});

	
	//new Range
	// let editor = vscode.window.activeTextEditor
	// let sel = editor.selection;
	// let abbr = editor.document.getText();
	// let rang = editor.document.getWordRangeAtPosition(sel.start)


	// getWordRangeAtPosition(getWordRangeAtPositio)
	// editor.insertSnippet(new vscode.SnippetString().appendText('nihao'), rang);
	// // let range = new vscode.Range(selection.active,selection.anchor)
	// const start = new vscode.Position(2, 3)
	// const end = new vscode.Position(5, 6)
	// const range = new vscode.Range(start, end)
	// const aTextDel = new vscode.TextEdit(range, 'uuuuuuuuuuuu')
	// eedit.edit(aTextDels)
	// console.log('xxxxxxcontentxxxxxx',range)
	// context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', providorCom, '@'));
	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
