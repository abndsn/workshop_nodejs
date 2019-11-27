function resl(){
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('resolve');
        }, 2000 );
    });
}

async function asyncCall(){
    console.log('call')
    var result = await resl();
    console.log(result)
}

asyncCall();