// rodar uma função depois de 3s

const timeOut = 3000 //milisegundos ou 3s
const finished = () => console.log('done!')  // função callback depois de 3s

setTimeout(finished, timeOut)
console.log('Começou!')
