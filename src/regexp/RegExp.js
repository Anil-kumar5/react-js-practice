 import React from 'react'
 // following are used for string matching
  // [abc] ---- means either a or b or c
  // [^abc] --- any character except abc
  //[a-z] --- from a to z
  //[A-Z] --- from A to Z
  //[a-z A-Z] --- from a to z,A to Z 
  //[0-9] ---- 0 to 9 

 // following are quantifiers
 
 // [] ? --- occurs 0 or 1 time
 // [] + occurs 1 or more time
 // []* occurs 0 or more times
 // []{n} occurs n times
 // []{n,} occurs n or more times
 // [] {y,z} occurs atleast y times but less than z times

 // meta characters simply shortcuts for above 

 // \d === [0-9]
 // \D === [^0-9]
 // \w === [a-z A-Z 0-9]
 // \W === [^ a-z A-Z 0-9]
 
// defining and their uses

// /[a-z]\s/g ---- a to z letter before the spaces and here we declared globally so it applies globally
// /[a-z][0-9]\s/g --- it means first character is bw a to z and next one is a number before spaces
// /[a-z][0-9]/g  ---  it means first character is bw a to z and next one is a number ,anywhere
// /[a-z][0-9]{3}/g --- first letter small alphabet and next three are numbers
// /[a-z]*[0-9]/g --- first any number of small alphabets with a number and also any numbers
 function RegExps() {
     const [input,setInput ] = React.useState('');
     let descp = "React is a JavaScript Library aaaa5 ,is a + h55 a111 1g265 k12 javaa redux javascpts";
     let op = /[a-z]*[0-9]/g
     // it means the letter before the space
     console.log(descp.match(op))
     return (
         <div>
          <input type = "text" value = {input} onChange = {e => setInput(e.target.value)} />   
         </div>
     )
 }
 
 export default RegExps
 