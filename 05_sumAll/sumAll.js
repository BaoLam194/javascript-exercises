const sumAll = function(a,b) {
    if( !Number.isInteger(a) || !Number.isInteger(b) ) return "ERROR";
    let start =Math.min(a,b);
    let end =Math.max(a,b);
    if(start < 0) return "ERROR";
    let result =0;
    for(let i =start;i<=end;i++){
        result +=i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
