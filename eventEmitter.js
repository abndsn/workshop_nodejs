let events = require('events');
let eventEmitter = new events.EventEmitter();

const coursTermine = function () {
    console.log('La cloche sonne');
}

EventEmitter.on('sonnerie', coursTermine)
//EventEmitter.emit()