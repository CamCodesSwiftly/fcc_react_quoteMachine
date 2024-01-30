const quotes = [
	{
		quote: "New day, new luck.",
		author: "German Proverb",
	},
	{
		quote: "Change what you can. Accept what you can't. Identify correctly.",
		author: "Kamran Babazadeh",
	},
	{
		quote: "It does not matter how slowly you go as long as you do not stop.",
		author: "Confucius",
	},
	{
		quote: "I used to be clever, I wanted to change the world. Now I am wise, I want to change myself.",
		author: "Rumi",
	},
	{
		quote: "What is the majority? It is insanity. Wisdom was always only with the few.",
		author: "Friedrich Schiller",
	},
	{
		quote: "If the wind will not serve, take to the oars.",
		author: "Latin Proverb",
	},
];

let button = document.getElementById("new-quote");
let body = document.getElementById("body");
let quote = document.getElementById("text");
let author = document.getElementById("author");
let i = document.getElementsByTagName("i");

function changeColor() {
	let color = getRandomColor();
	body.style.backgroundColor = color;
	quote.style.color = color;
	author.style.color = color;
	button.style.backgroundColor = color;
	i[0].style.color = color;
	i[1].style.color = color;
	let randomQuote = quotes[getRandomNumber()];
	quote.innerText = randomQuote.quote;
	author.innerText = randomQuote.author;
}

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 6); // Generates a random integer between 0 and 5
}

button.addEventListener("click", changeColor);

//onclick of new quote => 1. New Color => 2. New Quote
/*
  ONCLICK NEW QUOTE BUTTON
  1. New Color
      - button color
      - i color
      - button:hover backgroundcolor
      -i hover color
  
  2. New Quote
      - replace text with dom manipulation of js of text element
      - replace author with dom manipulation of js of author element
  */
