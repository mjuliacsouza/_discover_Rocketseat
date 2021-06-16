// sempre precisa de um argumento, se não dá erro
//console.log(require())  

// Módulos nativos

// o argumento 'path' 
const path = require('path')

// aqui retorna-se o nome do arquivo de um caminho
console.log(path.basename(__filename))

//Meus módulos - ligado à 'exports.js'
const myModule = require('./export')

console.log(myModule)