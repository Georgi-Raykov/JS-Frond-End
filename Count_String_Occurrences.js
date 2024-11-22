function solve(text, searchWord){
    let counter = 0;
    let new_text = text.split(' ');
    for (let word of new_text){

        if (word === searchWord){

            counter += 1;
        }
    }

    console.log(counter);
}
solve('This is a word and it also is a sentence', 'is')
solve('softuni is great place for learning new programming languages',

'softuni')