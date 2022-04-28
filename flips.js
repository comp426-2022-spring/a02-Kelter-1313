import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';







const args = process.argv.slice(2);
var resultArray = coinFlips(args[0].slice(9))

console.log(resultArray);
console.log(countFlips(resultArray))


