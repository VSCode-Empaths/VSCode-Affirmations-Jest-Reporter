function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function findLongerArrayLength(array1, array2) {
    let longerArray;
    if (array1.length > array2.length) {
        longerArray = array1;
    } else longerArray = array2;

    return longerArray.length;
}

module.exports = { getRandomNumber, findLongerArrayLength };
