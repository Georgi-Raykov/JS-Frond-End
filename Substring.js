function solve(text, start, length){

    let result = '';

    for (let i= start; i <= length; i++){

        result += text[i]


    }
    console.log(result)
}
solve('SkipWord', 4, 7)