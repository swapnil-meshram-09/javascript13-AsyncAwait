// // async

// async function test(){

//     // console.log('Testing');                 // promise { undefined }

//     await console.log('Testing');           // promise { <pending> }
// }

// const r1 = test()

// console.log(r1);                             // without return, it returs a promise with undefined without await keyword
//                                              // promise { undefined }
// console.log(typeof test);  

// console.log(typeof r1);





// async - await

function sum(a,b){

    return a+b
}


async function test2(){

    let a = await sum(2,3);

    let b = await sum(5,5);

    let c = await sum(10,10);

    console.log(a);
    console.log(b);
    console.log(c);
    
}
                                 
const r2 = test2()

// console.log(test2);              // print async function : test2

console.log(r2);



