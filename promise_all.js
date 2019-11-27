
var p1 = new Promise( (resolve, reject) => {
    setTimeout( (params) => {
        console.log(params)
        resolve(params)
    }, 1000, 'un');
});

var p2 = new Promise( (resolve, reject) => {
    setTimeout( (params) => {
        console.log(params)
        resolve(params)
    }, 2000, 'deux');
});

var p3 = new Promise( (resolve, reject) => {
    setTimeout( (params) => {
        console.log(params)
        resolve(params)
    }, 3000, 'trois');
});

var p4 = new Promise( (resolve, reject) => {
    setTimeout( (params) => {
        console.log(params)
        resolve(params)
    }, 4000, 'quatre');
});

var p5 = new Promise( (resolve, reject) => {
    reject('reject');
}).then( result => {

}).catch( error => {
    console.log(error)
});