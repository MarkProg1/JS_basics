// const promise = new Promise((resolve, reject) => {
//     const grandRandom = Math.random() > 0.5;

//     setTimeout(() => {
//         if (grandRandom) {
//             resolve("Успех");
//         }
//         reject("Ошибка");
//     }, 1000);
// });

// promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// chaining
const promise = new Promise((resolve) => {
    resolve(5);
});

promise
    .then((x) => {
        console.log("x: ", x);
        return x * 2;
    })
    .then((y) => {
        console.log("y: ", y);
        return y + 50;
    })
    .then((z) => {
        console.log("z: ", z);
    })
    .catch((error) => {
        console.log(error);
    });
