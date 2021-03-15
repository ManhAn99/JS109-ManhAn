// 'Review of arrays'
// //1
// let colors = ['red', 'gray', 'blue', 'whie', 'violet']
// //2
// console.log(colors[0])
// //3
// console.log(colors[2])
// //4
// colors[(colors.length - 1)] = 'ultraviolet'
// console.log(colors)
// //5
// let fourthColor = colors
// console.log(fourthColor)

// //6
// colors.push('yellow')
// //7
// colors.unshift('green')
// //8
// console.log(colors.length)
// //9
// colors.splice((colors.length - 1), 1)
// //10
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }
// //11
// for (let i = 0; i < colors.length; i++) {
//     console.log( i +' : '+colors[i])
// }
// //12
//  let lastColor = colors[(colors.length - 1)]

//  console.log(lastColor)

//  'Review of objects'
//  //1
//  let person = {
//      lastName : 'Mạnh An',
//      age  : 22,
//      school : 'HUMG',
//      firstName : 'Nguyễn'
//  }
//  //2
//  person.FullName = function(){
//      console.log("Hello, my name is " + this.firstName + '  '+this.lastName )
//  }
//  person.FullName()
//  //3

//    person.IQ = Math.floor(Math.random() *(120-80) + 80)
//    console.log(person.IQ)


//  //4
//  person.greeting = function(){
//      console.log("Hello! It nice to meet you!")
//  }
//  //5
//  person.sayHello = function(){
//      console.log("Hello, my name is " + this.firstName + '  '+this.lastName)
//  }
//  //6
//  person.sayHello()
//  //7
//  person.firstName = 'Bill'
//  person.lastName = "Gate"
//  person.sayHello()
//  //8
//  person.TestIQ = function(){
//      if(this.IQ >150){
//          console.log('Im Smart')
//      }
//      else{
//          console.log("no,im not good enough")
//      }
//  }

//  //9
//  person.TestIQ()
//  //10
//  person.IQ = Math.floor(Math.random() *(180-151) + 151)
//  console.log(person.IQ)

// //11
// person.TestIQ()
// //13
//  let person1 = [
//      {name : 'A'},
//      {name : 'B'},
//      {name : 'C'},
//      {name : 'D'},
//      {name : 'E'}
//  ]
//  function sayHello1(){
//      for(let i = 0; i< person1.length;i++){
//          console.log('hi im '+ person1[i].name)
//      }
//  }
//  sayHello1()
//FUNCTION WITH OBJECT:

//1
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student.name)
console.log(student.sclass)
console.log((student.rollno).toString())
//2
let {
    rollno,
    ...rest
} = student
console.log(rest)
console.log(rollno)
//3

console.log(Object.keys(student).length)
//4
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (let i = 0; i < library.length; i++) {
    console.log('# ' + (i + 1))
    console.log('author : ' + library[i].author)
    console.log('title : ' + library[i].title)
    console.log('reading status : ' + library[i].readingStatus)
    console.log('-------------------')
}



//FUNCTION WITH ARRAY:

//1
function TestArray(input) {
    if (Array.isArray(input) == true) {
        console.log(true)
    } else {
        console.log(false)
    }
}
TestArray(('w3resource'))
TestArray([1, 2, 4, 0])
//2
function myArray(arr) {
    arr.slice[0]
    return arr

}

console.log(myArray([1, 2, 4, 0]))
console.log(myArray([1, 2, [4, 0]]))
//3
function getElement(array, n) {
    if (n == null) {
        return console.log(array[0])
    }
    if (n < 0) {
        return console.log([])
    }
    if (n > 0) {
        return console.log(array.slice(0, n))
    }
}
getElement([7, 9, 0, -2])
getElement([], 3)
getElement([7, 9, 0, -2], 3)
getElement([7, 9, 0, -2], 6)
getElement([7, 9, 0, -2], -3)
//4
function MYARRAY(array, n) {
    if (n == null) {
        return console.log(array[array.length - 1])
    }
    if (n > 0) {
        return console.log(array.splice(-n, n))
    }
}
MYARRAY([7, 9, 0, -2])
MYARRAY([7, 9, 0, -2], 3)
MYARRAY([7, 9, 0, -2], 6)
//5
let myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.toString())
console.log(myColor.join('+'))

//7
//let enter = prompt('Enter')
function LowerCase1(x) {
    console.log(x.toLowerCase());
}

function UpperCase(z) {
    console.log(z.toUpperCase())
}
//8
function sum(a, b) {
    return a + b
}
let k = sum(1, 2)
console.log(k)
