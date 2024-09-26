const x = {
    a:5,
    b:78,
    c:71,
    d:4
}
function test(obj){
    
    let array=Object.values(obj);
    array=array.sort((a,b)=>a-b);
    
    const result={};
    for(let i=0;i<array.length;i++){
        for(let keys in obj){
            if(array[i]===obj[keys]){
              result[keys]= array[i]; 
            }
        }
    }
    return result
}
console.log(test(x))
