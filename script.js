console.log("***************  1  ***************");

for(let i = 0; i < 21; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

console.log("***************  2  ***************");

for (let i = 100; i > 0; i--){
    if (i % 3 == 0){
        console.log(i);
    }
}

console.log("***************  3  ***************");

let num = 4;
for (let i = 0; i < 6; i++){
    console.log(num);
    num -= 1.5;
}

console.log("***************  4  ***************");

let sum = 0;
for(let i = 0; i < 101; i++){
    sum += i;
}
console.log(sum);

console.log("***************  5  ***************");

let total = 1;
for(let i = 1; i < 13; i++){
    total *= i;
}
console.log(total);