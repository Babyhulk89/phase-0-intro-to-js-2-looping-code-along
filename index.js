function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  

  const messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  console.log(messages);
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  countDown(10);
  