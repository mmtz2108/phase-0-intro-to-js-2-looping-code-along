// const names = ["Marcos", "Laura", "Seve"];
// const event = ["birthday"];

function writeCards(names, event) {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {

        const newPhrase = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(newPhrase)
    }
    return newArray
};
function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
        console.log(positiveInteger--);

    }
} 