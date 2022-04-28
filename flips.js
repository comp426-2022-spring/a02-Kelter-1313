import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';






if (process.argv.length < 3){
    console.error("Error: no input")
    console.error("Usage: node flips --number=9")
}else{
const args = process.argv.slice(2);
if (args[0][9] == null){
 //   console.error("Error: no input")
    console.error("Usage: node flips --number=9")
}else if (args[0][9] != (1|2|3|4|5|6|7|8|9|0)){
    console.error("Usage: node flips --number=9")
}else{
var resultArray = coinFlips(args[0].slice(9))

console.log(resultArray);
console.log(countFlips(resultArray))
}
}