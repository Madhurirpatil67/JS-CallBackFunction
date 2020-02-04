//CallBack Functions
function operation(numVal1,numVal2,funcCallBack)
{
     let result=funcCallBack(numVal1,numVal2);
     return (result*5)/100;
}

let result=undefined;
result=operation(500,400,function(num1,num2){
      return (num1+num2);
    });
console.log(result);    

function mul(num1,num2)
{
    return num1*num2;
}
result=operation(24,30,mul);
console.log(result);