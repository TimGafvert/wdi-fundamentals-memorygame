var cardsInPlay = [];
var cards = [
{
	rank: 'queen',
	suit: 'heart',
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit: 'heart',
	cardImage: "images/king-of-hearts.png",
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",
}


]

function checkForMatch() {	
	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
  } else {
      console.log("Sorry, try again.");
      alert("Sorry, try again");
  }
}
}

function createBoard() {
	for (var i = 0; 1 < cards.length; i++) {
		var newListItem = cardElement.createElement('img');
		cardElement.setAttribute('attributeName', 'attributeValue');
	}
}

function flipCard(cardId) {
	
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

flipCard(0);
flipCard(2);







