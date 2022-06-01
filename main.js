
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

const foodArray = [
 { img: "🍕", name: "pizza", foodType: "junk" },
 { img: "🍔", name: "burger", foodType: "junk" },
 { img: "🍟", name: "fries", foodType: "junk" },
 { img: "🌭", name: "hot dog", foodType: "junk" },
 { img: "🥗", name: "salad", foodType: "healthy" },
 { img: "🥙", name: "pita", foodType: "healthy" },
 { img: "🥪", name: "sandwich", foodType: "healthy" },
 { img: "🌯", name: "burrito", foodType: "healthy" },
 { img: "🥣", name: "soup", foodType: "healthy" },
];

const filterFood = (inputArray, foodType) => {
    return inputArray.filter((food) => food.foodType == foodType)
}

// console.log(filterFood(foodArray, "junk"));
// console.log(filterFood(foodArray, "healthy"));

// ----------------------------------------------------

const heroArray = [
 { name: "Spider-Man" },
 { name: "Thor" },
 { name: "Black Panther" },
 { name: "Captain Marvel" },
 { name: "Silver Surfer" },
];

const createHeroObjects = (inputArray) => {
    return inputArray.map((hero, index) => {
        return {
            id: index,
            hero: hero.name,
            power: Math.ceil(Math.random() * 10)
        }
    })
}

// console.log(createHeroObjects(heroArray));