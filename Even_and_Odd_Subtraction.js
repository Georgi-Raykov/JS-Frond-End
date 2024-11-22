function solve(arr){

    let odd = 0;
    let even = 0;
    
    
    for (let num of arr){

        if (num % 2===0){
            even += num;

        }else{

            odd +=num;
        }

    }

    let result = even - odd;
    console.log(result)

}
solve([1,2,3,4,5,6])
