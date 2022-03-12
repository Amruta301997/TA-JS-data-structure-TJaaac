// 1. Create an array named numbers and store 5 number values in it
let numbers=[2,56,76,43,12];
// 2. Calculate the sum of array items and print it to the console using console.log()
numbers=2+56+76+43+12;
console.log(numbers);
// 3. Calculate the average of array items and print it to the console using console.log()
for(number of numbers){
    console.log(number);
}
// 4. Find the highest number in the array and print it to the console using console.log()

let highest= 0;

for (let i=0; i<=highest; i++){
    if (numbers>highest) {
         highest=numbers[i];
    }
}
console.log(highest);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest= 0;

for (let i=0; i<=lowest; i++){
    if (numbers>lowest) {
         lowest=numbers[i];
    }
}
console.log(lowest);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even=[];
for(let number of numbers){
    if(number%2 === 0){
        even.push(number);
    }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd=[];
for(let number of numbers){
    if(number%2 !=0){
        odd.push(number);
    }
}
console.log(odd); 
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisible5=[];
for(number of numbers){
    if(number%5==0){
        divisible5.push(number);

    }
}
console.log(divisible5);
// 9. Log all the element of the array one by one
//numbers[numbers.lenght];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// 10. Find all the number in the array that is divisible by 3
let divisible3=[];
for(number of numbers){
    if(number%3==0){
        divisible3.push(number);
    }
    else{
        alert(`not all the numbers are divisible by 3`);
    }
}
console.log(divisible3);