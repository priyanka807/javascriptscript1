// function one(){
// let name="maksood"
// }

// function two(){
// console.log(name)
// }

function outer(){
    let name ="maksood"
    return function inner(){
      return name
    }
}
let fn = outer()
console.log(fn(),"outer")