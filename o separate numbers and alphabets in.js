const str = "a3fd7h9k10xl";

function test(string) {
  const numArr = [];
  const strArr = [];
  const spliteString = string.split(""); 
  
  spliteString.forEach((el) => {
    if (/\d/.test(el)) { 
      numArr.push(el);
    }else if(/[a-zA-Z]/.test(el)){
        strArr.push(el)
    }
  });
 return {
    numbers: numArr,
    alphabets: strArr
  };
};
console.log(test(str)); 
