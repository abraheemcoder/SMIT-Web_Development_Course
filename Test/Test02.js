console.log("Syn1");
console.log("Syn2");

setTimeout(() => {
    console.log("Asyn1");
}, 0);

console.log("Syn3");

setTimeout(() => {
    console.log("Asyn2");
}, 0);

console.log("End");
