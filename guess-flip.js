import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';
if (process.argv.length < 3){
    // return error message
    console.error("Must type either heads or tails")
    process.exit(1)
}
const args = process.argv.slice(2);
if (((args[0] != "heads") && (args[0] != "tails")) || args[0] === null){
    // return error message
    console.error("Must type either heads or tails")
    
    process.exit(1)
}
console.log(flipACoin(args[0]));