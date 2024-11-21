function solve(num, num1, num2){


    let result;
    if (num > num1 && num > num2){

        result = num
    }
    else if (num1 > num && num1 > num2){
        result = num1
    }
else if(num2 > num && num2 > num1){

    result = num2
}

console.log(result)
       
    
}
solve(2, 3, 8)