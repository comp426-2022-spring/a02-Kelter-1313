import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

//if (process.argv.length < 3){
    // return error message
//    console.error("Must type either heads or tails")
  //  process.exit(1)
//}
var args = process.argv.slice(2);
args = args[0].split("--call=")[1]
if(args[0] == null){
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails] ")
}else if(((args[0] != "heads") && (args[0] != "tails"))){
    // return error message
    console.error("Usage: node guess-flip --call=[heads|tails] ")

}else{console.log(flipACoin(args[0]))}
