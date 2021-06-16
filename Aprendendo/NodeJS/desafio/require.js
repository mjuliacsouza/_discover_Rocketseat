const getFlags = require('./export')

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greetings')}`)

// rodar no terminal: 
//'node require --name "Maju" --greetings "Tudo bem?"'
// lembrar de estar no diretório 'desafio'

// Irá retornar 'Oi Maju. Tudo bem?'