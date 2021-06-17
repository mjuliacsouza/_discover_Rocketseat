const { EventEmitter} = require('events')

const ev = new EventEmitter()

// ouvir eventos
ev.on('saySomething', (message) => {
    console.log('eu ouvi vc', message)
})

// se usarmos 'once' no lugar de 'on' só será disparado uma única vez

// disparar eventos
ev.emit('saySomething', "Maju")
ev.emit('saySomething', "Ana")
