// nodejs
/*
// print
console.log("Hello World!")
// let
let a=10 
a=12 //values can be reassigned
// let a=11 (redeclaration is not possible)
console.log(a)
// const
const b=10
console.log(b)
// b=11 (cannot be reassigned)
// var
var c=10
c="welcome" 
var c="string" //can be reclared and reassigned
console.log(c)

let isAvailable =true
// typedef
console.log(typeof isAvailable) //returns the typeof the variable
console.log(typeof c)

// object
let user={
    firstName: "Jayasurya",//key:value
    lastName: "Kanagaraj",//key:value
    age:20,
}
console.log(user.firstName)
console.log(user.age)

// functions
function getName(firstName){
    console.log(firstName) //jayasurya
    return firstName + " Hi!"  //returns the object
}

let result=getName(user.firstName) 
console.log(result) //jayasurya Hi!

// array
let array=[10,20,30]
let array1=[10,20,30,'ABC',result] //diff data type values can be inserted into an array 
console.log(array,array1)//[ 10, 20, 30 ] [ 10, 20, 30, 'ABC', 'Jayasurya Hi!' ]

// ifelse
let age = 18
if(age==18){
    console.log("You are eligible")
}else{
    console.log("Go study")
}
//Date
console.log(Date())  //Thu Feb 16 2023 10:29:48 GMT+0530 (India Standard Time)


//arrow function
let returnSomething =(num1,num2)=>{
    let a=10
    console.log(num1+num2)
}
returnSomething(10,20)


let sum=(num1,num2)=>{
    console.log(Number(num1)+Number(num2))
}
let diff=(num1,num2)=>{
    console.log(num1-num2)
}
let mul=(num1,num2)=>{
    console.log(num1*num2)
}
let div=(num1,num2)=>{
    console.log(num1/num2)
}

let operation=process.argv[2];
let num1=process.argv[3]
let num2=process.argv[4]


function init(){
    switch(operation){
        case '+':
            sum(num1,num2)
            break
        case '-':
            diff(num1,num2)
            break
        case '*':
            mul(num1,num2)
            break
        case '/':
            div(num1,num2)
            break
    }
}
init()



const fs=require('fs')
fs.readFile(`${__dirname}/pet.txt`,(err,data) => {
    if(err){
        console.log("Error Happened")
        return
    }
    console.log(data.toString())
})
fs.writeFile(`${__dirname}/pet.txt`,'Naai eh vena',(err) => {
    if(err){
        console.log("Error Happened")
        return
    }
    console.log("Saved data successfully")
})


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);


// Task
const fs=require("fs")
const superagent=require("superagent")
fs.readFile(`${__dirname}/pet.txt`, (err, data) => {
    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
        console.log(res.body)
    })
})

const isRideAccepted = false
const p1=()=>{
    return new Promise((resolve,reject)=>{
        if(isRideAccepted){
            resolve("enjoy your ride")
        }else{
            reject('Please look for other cab driver')
        }
    })
}

p1().then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})


const fs=require('fs')
const readFile = (fileName) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err){
                reject("Unable to read file! Something is happened")
            }
            resolve(data)
        })
    })
}

const write=(fileName,breed)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName,breed,(err)=>{
            if(err){
                reject("unable to write data")
            }resolve("Data saved succesfully")
        })
    })
}

write(`${__dirname}/pet.txt`,'boxer')
.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

readFile(`${__dirname}/pet.txt`)
.then((data)=>{
    console.log(data.toString())
}).catch((message)=>{
    console.log(message)
})

const http=require('http')
const ip='localhost';
const port=3000

const requestListener=(req,res)=>{
    res.setHeader('Content-Type',"application/json");
    res.writeHead(200)
    res.end(`
    {
        "message: "success",
        "url":"http://random/images/myapplication"
    }`)
}

const server = http.createServer(requestListener)
server.listen(port,ip , ()=>{
    console.log(`Server running on port ${port}`)
})

*/

