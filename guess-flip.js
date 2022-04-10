import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';
if (process.argv.length < 3){
    // return error message
    throw new Error("Must type either heads or tails");
}
const args = process.argv.slice(2);
if ((args[0] != "heads") && (args[0] != "tails")){
    // return error message
    throw new Error("Must type either heads or tails");
}
console.log(flipACoin(args[0]));