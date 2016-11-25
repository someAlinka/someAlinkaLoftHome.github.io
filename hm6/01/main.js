function timer(ms){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

timer(3000).then(() => console.log('я вывелась через 3 секунды'))