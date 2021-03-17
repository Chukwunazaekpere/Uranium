

/**
 * This function determines if a "num" is a 
 * square number or not.
 * A square number is one whose square - root is
 * a whole number.
 * 
 * @param {*} num 
 * @returns a boolean
 */
const squareNumber = (num) => {
    const result = String(Math.sqrt(num));
    for(let count=0; count <= result.length; count++){
        if(result[count] === "."){
            return (`\n\t ${num} isn't a square number.`);
        }
    }
    return (`\n\t ${num} is a square number.`);
}

// test
// let m = squareNumber(16)
// console.log(m);


/**
 * 
 * @param {*} word 
 * @returns 
 */
const breakCamelCasing = (word) => {
    let brokenWord = []
    let count = 0;
    while( true ){
        try {
            if( word[count] === word[count].toUpperCase() ){
                const splitWord = word.replace(word[count], " "+word[count])
                let pushWord = splitWord.split(" ")
                brokenWord.push(pushWord[0])
                
                newWord = pushWord[1]
                word = newWord; 
                count = 0;
            }
            count++
        } catch (error) {
            let actual = brokenWord + "," + word;
            let main = actual.split(",");
            let newWord = " ";
            for(let i=0; i<main.length; i++){
                newWord = newWord + main[i] + " "
            }
            return newWord
        }
    }
}


// test
// let k = breakCamelCasing("heIsAGoodBoy")
// console.log("\n\t print: ", k);

