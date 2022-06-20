
const readline = require('readline-sync');

// Enter the number
let number = readline.question().split(" ").map(a=>Number(a));
n = number[0];
N = number[1];

con_array = readline.question().split(" ").map(a=>Number(a));

function getMinMaxWithMath(arr){
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
    let result =  ([maximum, minimum]); 
    return result;
  };

  
function concentration(n, N, con_array ){
    min_max = getMinMaxWithMath(con_array)
    N <= min_max[0] && N >= min_max[1] ? console.log("YES") : console.log("NO");
}

concentration(n, N, con_array)

