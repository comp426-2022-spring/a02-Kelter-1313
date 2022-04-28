import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';






if (process.argv.length < 3){
    console.error("Error: no input")
}else{
const args = process.argv.slice(2);
if (args[0][9] == null){
    console.error("Error: no input")
}else{
var resultArray = coinFlips(args[0].slice(9))

console.log(resultArray);
console.log(countFlips(resultArray))
}
}