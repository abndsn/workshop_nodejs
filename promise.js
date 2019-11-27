const myPromise = new Promise( function(resolve, reject){
    if(true){
        resolve('fine')
    } else {
        reject('error')
    }
})

myPromise.then( function whenOk(response) {
    console.log(response)
    return response
} ).catch( function notOk(err) {
    console.error(err)
}) 