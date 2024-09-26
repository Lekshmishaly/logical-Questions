let x={
    a:[1,2,3,4,5],
    b:4,
     c:{ 
         d:[2,3,4,5],
     }
}
function findSum(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key] == "number"){
            sum = sum+obj[key];
        }else if(Array.isArray(obj[key])){
            obj[key].forEach((el)=>{
            sum = sum+el;
            })
        }else if(typeof obj[key] == "object"){
            sum = sum + findSum(obj[key]);
        }
    }
    return sum;
}

console.log(findSum(x))
