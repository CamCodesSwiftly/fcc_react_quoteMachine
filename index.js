const quotes = [
    {
      quote:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie"
    },
    {
      quote:
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb"
    }
  ];
  
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
  }
  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  button.addEventListener("click", changeColor);
  