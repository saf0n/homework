// 1. 
// users = {
//     name: 'Danila',
//     age: 23,
//     sex: male
// }

// 2. 
// const name = {
//     hello(name) {
//     return `Hello` +' '+ name
//     // return `Hello `+ name //или в таком варианте
//     }
// }
// console.log(name.hello('Alex'));

3.

const users = [
    {
        name: "alex",
        isAdmin: false,
    },

    {
        name: "Ann",
        isAdmin: false,
    },

    {
        name: "Dan",
        isAdmin: false,
    },

    {
        name: "John",
        isAdmin: true,
    } 
]

let deffUsers = 0;

for (let i = 0; i < users.length; i++) {  
    if (users[i].isAdmin === false) {       
    deffUsers++;                          
    }
}
console.log(`Количество простых пользователей ${deffUsers}`);
