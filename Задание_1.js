
// Задание 1 //

function getCons() {

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "b", null, "q"];
let even = 0;
let odd = 0;
let other = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != "number")) {
        other++;
    } else {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log("Четные " + even);
console.log("Не четные " + odd);
console.log("нулевой " + other);
}
 getCons();