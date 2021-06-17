// clearTimeOut cancela um timeOut

const timeOut = 3000 //milisegundos ou 3s
const finished = () => console.log('done!')  // função callback depois de 3s

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)  // cancela o timeOut
