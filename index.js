function writeCards(names, eventName) {
  const thankYouCards = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouCards.push(message);
  }

  return thankYouCards;
}

const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const thankYouCards = writeCards(names, eventName);

console.log(thankYouCards);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

const startingNumber = 10;
countDown(startingNumber);
