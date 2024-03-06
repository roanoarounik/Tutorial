console.log(`Kalashi Music`);

// Data Types
let name = `Rounik`;
let string = `this is a string`; // A string is just any combination of characters enclosed within quotation marks
let number = 100; // Any whole number is an integer
let float = 100.5; // Any decimal place number is a float

let array = [1, 2, 3, `hello random string`, number]; // Arrays are for lists of multiple different datas
let object = { id: 1, name, attack: 100, health: 1000 }; // Objects are for related key, value pairs

let users = [
    {
        id: 1,
        name: `Bill`,
        password: `bill`,
        email: `bill@bill.com`,
    },
    {
        id: 2,
        name: `Bob`,
        password: `bob`,
        email: `bob@bob.com`,
    },
]

let varWithVar = `This is a string with a variable ${float} inside of it`;

// console.log(`Data Types`, {
//     string,
//     number,
//     float,
//     array,
//     object,
//     users,
//     varWithVar,
// });

// Function
const capitalizeFirstLetter = (anyString) => {
    return anyString.charAt(0).toUpperCase() + anyString.slice(1);
}

let lcasename = `rakib`;
let lcasename2 = `rounik`;
lcasename = capitalizeFirstLetter(lcasename);
lcasename2 = capitalizeFirstLetter(lcasename2);

// console.log(`l case names`, {
//     lcasename,
//     lcasename2
// });

// document.body.innerHTML = `<div>
//     Changed from JS
// </div>`;

let progressBar = document.querySelector(`.progressBar`);
let customButton = document.querySelector(`.customButton`);

function doSomething() {
    console.log(`do something`);
    progressBar.value = progressBar.value + 0.01;
}

if (customButton) {
    customButton.addEventListener(`click`, e => {
        doSomething();
    })
}