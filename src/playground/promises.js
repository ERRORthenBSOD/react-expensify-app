const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve({
        //     data:'This is my resolved data',
        //     age: 31
        // });
        reject('ERROR OMG REJECT!!!')
    },1500);
});

console.log('before');


// promise.then((data)=>{
//     console.log('2',data);
// }, (fuckingError)=>{
//     console.log('error: ', fuckingError);
// });

promise.then((data)=>{
    console.log('2',data);
}).catch((fuckingError)=>{
    console.log('error: ', fuckingError);
});

console.log('after');