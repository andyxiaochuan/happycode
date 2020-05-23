
let coder = require('./code.js')
// console.log(coder)

// str.match(myRe)
// console.log(myArray)


// console.log(outstr)
// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// str.replace(re, '$2, $1'); // "Smith, John"
// console.log(RegExp.$1)
// console.log(RegExp.$2)

// let str = "110101199003070812";         // 随便输的号码 用于测试
// let reg = new RegExp(/(?<=\d{6})(?=(?:\d{4})+(?!\d))/g);  
// let result = str.replace(reg,' ');
// console.log(result);


function getMetTxt(str){
    let metString = str
    coder.metCodes.forEach((item)=>{
        metString += item+'\n'
    })
    return metString
}

function buildCode(text){
    // let str = 'class( a,b,c,_a,_b,_c,_c)'
    // let myRe = /(?<=class\().*(?=\))/g;
    // let arr = text.match(myRe);
    let arr = text.split('_')
    // if (arr === null) return
    // let mets = arr[0].split(',')
    // console.log('--------arr', arr)
    let str = ''
    arr.forEach((item) => {
        str += getMetTxt(item)
    })
    return str
}
module.exports = buildCode










