console.log("Up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];
const cardsInPlay = [];

function checkForMatch(cardId) {
	this.setAttribute("src",cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {	
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  console.log("You found a match!");
		} else {
		  console.log("Sorry, try again.");
}
}
}

function flipCard() {
	let cardId = this.getAttribute('data-id');  
	cardElement.setAttribute('src',cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch(cardId);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};


createBoard();