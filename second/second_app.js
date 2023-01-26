//commanJS, every file is module(by default)
//Modules - encapsulated code (only share minium)


const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)

sayHi('susan')
sayHi(names.nadeem)
sayHi(names.syed)