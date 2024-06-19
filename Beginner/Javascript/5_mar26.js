// let friend1 = "amit";
// const friend2 = "kunal";
// const friend3 = "rahul";
// // arrays always strat with 0 index
//  let friends = ["amit", "kunal", "rahul"];
//  console.log(friends)
//  //index
//  let yearsWeMet = [1991, 2002,1996, 2001, 2020]
//  console.log(yearsWeMet);

//  // we can access the array element through the index, 1 is the index of 2002
//  console.log(yearsWeMet[1])
//  console.log(yearsWeMet[3])

//  console.log(`length of the array is ${yearsWeMet.length}`)
//  console.log(`length of the array is ${yearsWeMet.length - 1}`)
// friends[0] = "shadab"

// console.log(friends)

// calculate age 
function calcAge(birthYear){
   return 2024 - birthYear;
}
console.log(calcAge(1996))
let birthYears = [1991, 2002,1996, 2001, 2020]
console.log(calcAge(birthYears[0]))

//Array methods
let newFriends = ["amit", "rahul", " ali", "pinki"]

//add
//.push
//pop
newFriends.push("neha")
console.log()
//shift
//unshift
//indexOf
//includes  ....new the value either true or false

if(newFriends.includes("rinku")){
    console.log(`yeah!!!! pinki is there`)
}
else{
    console.log("oppps not there")
}