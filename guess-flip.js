import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

//if (process.argv.length < 3){
    // return error message
//    console.error("Must type either heads or tails")
  //  process.exit(1)
//}
const args = process.argv.slice(3);
if (((args[0] != "heads") && (args[0] != "tails")) || args[0] === null){
    if(args[0] == null){
        console.error("Error: no input.")
    }
    // return error message
    console.error("Usage: node guess-flip --call=[heads|tails]")

}else{console.log(flipACoin(args[0]))}
