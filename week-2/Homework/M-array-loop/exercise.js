/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
 function letterArr(startwithT){
  for (let i = 0; i<startwithT.length; i++){
  const letterMessage = `These are the letters starts with T ${startwithT[i]}`;
  console.log(letterMessage)
  if(letterMessage[0] == "T"){
    return letterMessage;
  }
 }
}
console.log(letterArr(daysOfWeek));