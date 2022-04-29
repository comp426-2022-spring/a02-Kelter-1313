import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';


if (process.argv.length < 3){
    // return error message
    console.error()
   // console.error("Error: no input.\nUsage: node guess-flip --call=heads")
    process.exit(1)
}else{
var args = process.argv[2];
if(args == "--call=" || args == "--call"){
    console.error()
   // console.error("Error: no input.\nUsage: node guess-flip --call=heads")
    process.exit(1)
}else if(((args != "--call=heads") && (args != "--call=tails")) || args === null){
    // return error message
    console.error()
    //console.error("Usage: node guess-flip --call=tails")
    process.exit(1)

}else{console.log(flipACoin(args.slice(7)))}
}
