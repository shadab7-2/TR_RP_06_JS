//use case of all covered topic var arr object fn conditon
var name = "Shadab Ansari"

const studentName = ["Shadab", "Aman","Gopal", "Shubham"]

const studentInfo = {
    name : "shadab",
    age : 23,
    mobile_No: 7860629374,
    address : {
        town: "bandra",
        district: "Andheri",
        city: "Mumbai",
        state: "Maharastra"
    },
}

console.log(studentInfo.address.city)
const sayHi = function(name){
    console.log(`Hello ${name}, how are you...!`)
}
sayHi("shadab")

// arry is index based always start from 0
// To iterate arry we will go in last index for last item
// we will access array with array name[index]

for(var i = 0; i <= 10; i+=2){
    console.log(i)
}
for (let i = 0; i < studentName.length; i++) {
    const element = studentName[i];
    console.log(element);
    
}