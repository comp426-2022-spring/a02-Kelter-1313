import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';






if (process.argv.length < 3){
    var resultArray = coinFlips(1)
    console.log(resultArray)
    console.log(countFlips(resultArray))
 //   process.exit(1)
}else{
const args = process.argv.slice(2);
if (args[0][9] == null){
  //  console.log("Error: no input\nUsage: node flips --number=9")
  var resultArray = coinFlips(1)
  console.log(resultArray)
  console.log(countFlips(resultArray))
   // process.exit(1)
    
}else if (args[0][9] != 0 && args[0][9] != 1 && args[0][9] != 2&& args[0][9] != 3&& args[0][9] != 4&& args[0][9] != 5&& args[0][9] != 6&& args[0][9] != 7&& args[0][9] != 8&& args[0][9] != 9){
   // console.log("Usage: node flips --number=9")
    var resultArray = coinFlips(1)
    console.log(resultArray)
    console.log(countFlips(resultArray))
  //  process.exit(1)
}else{
var resultArray = coinFlips(args[0].slice(9))

console.log(resultArray);
console.log(countFlips(resultArray))
}
}