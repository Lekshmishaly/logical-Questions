const num=[67,23,90,45,78,22,110];

function test(number){
 return  number.reduce(([largeNum,secLarge],curr)=>{
    if(secLarge<curr){
        largeNum=secLarge;
        secLarge=curr;
    }else if(secLarge<curr){
        secLarge=curr;
    }
    
    return  [largeNum,secLarge] ;
},[-Infinity,-Infinity])    
};

const result=(test(num))

console.log({
    Largest:result[1],
    SecondLargest:result[0],
})
