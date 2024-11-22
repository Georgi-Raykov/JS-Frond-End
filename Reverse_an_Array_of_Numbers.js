function reverse(n, array){

    let new_array = [];
    for (let i=0; i < n; i++){

        new_array.push(array[i])


    }
    let output =[];
    for (let i= new_array.length -1; i>=0; i--){

        output.push(new_array[i]);
    }
    console.log(output.join(", "));
}
reverse(3, [10, 20, 30, 40, 50])