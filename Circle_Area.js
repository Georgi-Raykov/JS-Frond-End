function solve(input){
    let result;
    let typeOfinput = typeof(input)

    if (typeOfinput === 'number'){

        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2))
    }else{

        console.log(`We cannot calculate the circle area, because we receive a ${typeOfinput}.`)
    }
}
solve(5)
solve('name')