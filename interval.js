function interv(){
    console.log('Exemple d\'exécution permanente');
}

setInterval(interv, 1500);

console.log('before immediate');

setImmediate( (interv) => {
    console.log(`${interv}`);
}, 'executing immediate');

console.log('after immediate');