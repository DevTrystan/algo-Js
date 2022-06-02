let read = require('readline-sync');


// function trouveLePlusLong(string) {
//     let mots = string.split(' ');
//     let longMax = 0;

//     for (i = 0; i < mots.length; i++) {
//         if (mots[i].length > longMax) {
//             longMax = mots[i].length;
//         }
//     }
//     return longMax;
// }
// console.log(trouveLePlusLong("Hellooo the team"));

//////////////////////////////////
/////////////////////////////////


// function repeatStr(str, num){

//     let final = '';

//     while(num > 0) {

//         final += str;
//         num--;

//     }
//     return final;
// }
// console.log(repeatStr("*", 3));

//////////////////////////////////
/////////////////////////////////

// function repeatStr(str, num){


//     if(num < 0) {
//         return "";

//     }else{
//         return str + repeatStr(str, num - 1);
//     }
    
// }
// console.log(repeatStr("*", 3));


let n = 5;
let string = "";

for(let i = 1; i<=n; i++){

    for(let j= 1; j <= n-i; j++){
        string+=" ";
    }
    for(let k=0; k<2*i-1; k++){
        string += "*";
    }
    string += "\n";
}

console.log(string);

