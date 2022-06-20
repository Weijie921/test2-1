// var n = 3
// var N = 75
// var con_array = [50, 65 , 95]

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