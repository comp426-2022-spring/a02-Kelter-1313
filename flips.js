import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';






if (process.argv.length < 3){
    throw new Error("Error: no input\nUsage: node flips --number=9")
}else{
const args = process.argv.slice(2);
if (args[0][9] == null){
 //   console.error("Error: no input")
    throw new Error("Usage: node flips --number=9")
}else if (args[0][9] != 0 | args[0][9] != 1 && args[0][9] != 2&& args[0][9] != 3&& args[0][9] != 4&& args[0][9] != 5&& args[0][9] != 6&& args[0][9] != 7&& args[0][9] != 8&& args[0][9] != 9){
    throw new Error("Usage: node flips --number=9")
}else{
var resultArray = coinFlips(args[0].slice(9))

console.log(resultArray);
console.log(countFlips(resultArray))
}
}