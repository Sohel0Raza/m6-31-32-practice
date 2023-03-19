// practice 1
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2,3,4);
// console.log('result :', result);

//practice 2
const threeLine = `
I am a web developer.
I love to code.
I love to eat biryani.`
// console.log('threeLine :', threeLine);

//practice 3
const added = (num1, num2 = 0) => num1 + num2;
const total = added(12);
// console.log('total :', total);

// practice 4
const myFriendsList =['Himuu', 'Shihab', 'Anower', 'Utshab', 'Prosnatoo', 'Shawonn', 'Rokey', 'Shamul', 'Hasan', "Anash"];
const evenFriend = [];
const myFriends = (friends) =>{
    for(const friend of friends){
        if(friend.length % 2 === 0){
            evenFriend.push(friend)
        }
    }
    return evenFriend;
} 
const evenFriends = myFriends(myFriendsList);
// console.log('evenFriends :', evenFriends);

// practice 5
const numbers = [3, 9, 5, 2, 6, 8, 10];
const averageArray =(numbers)=>{
    let sum = 0;
    for(const number of numbers){
        const square = Math.pow(number,2);
        sum = sum + square;
    }
    const average = (sum / numbers.length).toFixed(2);
    const averageNumber  = parseFloat(average)
    return averageNumber;
}

const average = averageArray(numbers);
// console.log('average :', average);

// practice 6
const numbersArray1 = [29, 28, 19, 37, 29, 37, 36, 38, 72];
const numbersArray2 = [30,27, 29, 38, 37, 63, 84, 37, 74, 53, 28];
const maxInArray = (array1, array2) =>{
 const newArray = [...array1,...array2];
 const maxNumber = Math.max(...newArray);
 return maxNumber;
}  
const maxNumber = maxInArray(numbersArray1, numbersArray2);
console.log('maxNumber :', maxNumber);
