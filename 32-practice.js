const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbers = oddNumbers.map(num => num + 1);
const evenNumbers2 = oddNumbers.find(num => num + 1);
// console.log('result :', evenNumbers2);

const numbers = [33, 50, 79, 78, 101, 30];
const dividedTen = numbers.filter(num => num % 10 === 0);
const dividedTen2= numbers.find(num => num % 10 === 0);
// console.log('dividedTen :', dividedTen2);

const numbers2 = [1, 9, 17, 22];
const add= numbers2.reduce((num1, num2) => num1 + num2 , 0)
// console.log('total :', add);

const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:15},
    {name: 'Raju', age:22}
]
const totalAge =people.reduce((currentValue, previousValue) => currentValue + previousValue.age , 0)
// console.log('totalAge :', totalAge); 

let data ={
    location:[
        {
            latitude:'34.5 , 37.8',
            latitude:'98.77 , 68.8',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}
const city = data.location[0].city
// console.log('city :', city);
const user ={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}  
const emailIs = user.email;
console.log('email :', emailIs);

const addressIs = user.address;
console.log('address :', addressIs);

const cityName = user.address.city;
console.log('cityName :', cityName);

const latIs = user.address.geo.lat;
console.log('latIs :', latIs);
const companyName = user.company.name;
console.log('companyName :', companyName);



