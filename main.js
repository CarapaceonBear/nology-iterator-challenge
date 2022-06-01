
const capitaliseNames = (inputArray) => {
    return inputArray.map((name) => {
        return (name[0].toUpperCase() + name.substring(1, name.length));
    })
}

// console.log(capitaliseNames(["will", "harry", "tom"]));

// ----------------------------------------------------

const removeVowels = (inputArray) => {
    const vowels = new RegExp('[aeiou]');
    return inputArray.filter((letter) => {
        return (! vowels.test(letter));
    })
}

// console.log(removeVowels(["w", "i", "l", "l"]));

// ----------------------------------------------------

const getAverage = (inputArray) => {
    let sum = inputArray.reduce((a, b) => (a + b));
    return (sum / inputArray.length);
}

// console.log(getAverage([2, 3, 4, 8, 23]));

// ----------------------------------------------------

const removeShorterWords = (inputArray, limit) => {
    return inputArray.filter((word) => (word.length >= limit));
}

// console.log(removeShorterWords(["hello", "my", "name", "is", "Bartholomew"], 5));

// ----------------------------------------------------

const convertToCamelCase = (inputArray) => {
    return inputArray.map((element) => {
        return (element.split(" ").map((word) => {
            return (word[0].toUpperCase() + word.substring(1, word.length))
        }))
        .join("");
    })

    // return inputArray.map((element) => (element.split(" ").map((word) => word[0].toUpperCase() + word.substring(1, word.length))).join(""))
}

// console.log(convertToCamelCase(["hello my", "good friend"]));

// ----------------------------------------------------

const giveScrabbleScore = (inputArray) => {
    return inputArray.map((object) => object.value).reduce((a, b) => (a + b));
}

// console.log(giveScrabbleScore([{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}]));

// ----------------------------------------------------

const convertMilesToKm = (inputArray) => {
    let conversions = inputArray.map((miles) => miles * 1.60934)
    let total = conversions.reduce((a, b) => (a + b));
    return {convertedKM : conversions, totalKM : total}
}

// console.log(convertMilesToKm([10, 5]));

// ----------------------------------------------------

const filterFood = (inputArray, foodType) => {
    
}