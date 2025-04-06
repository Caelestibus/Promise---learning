const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Hurray it worked');
    } else {
        reject('Error, Girl Bye');
    }
});

promise.then(result => console.log(result));
