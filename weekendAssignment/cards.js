
const cardsArray = ["Hello", "Hello", "Hola", "Hola", "Hallo", "Hallo", "Ni Hao", "Ni Hao", "Bonjour", "Bonjour","Ciao","Ciao"];
let firstCard = null;
let secondCard = null;
let lockBoard = false; 
let score = 0;


function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function createBoard() {
  const gameBoard = document.getElementById("gameBoard");
  document.getElementById("finished").style.display = "none"; 
  gameBoard.innerHTML = ""; 
  const shuffledCards = shuffleCards(cardsArray);
  shuffledCards.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${value}</div>
      </div>`;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

         
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return; 

  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}


function checkForMatch() {
  const isMatch =
    firstCard.querySelector(".card-back").textContent ===
    secondCard.querySelector(".card-back").textContent;

  if (isMatch) {
    updateScore();
    makeCardsDisappear();
  } else {
    unflipCards();
  }
}


function updateScore() {
  score++;
  document.getElementById("score").textContent = `Score: ${score}`;
}


function makeCardsDisappear() {
  setTimeout(() => {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    checkGameFinished(); 
    resetBoard();
  }, 500);
}


function checkGameFinished() {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    if (!card.classList.contains("matched")) {
      return; 
    }
  }
  document.getElementById("finished").style.display = "block"; 
}



function unflipCards() {
  lockBoard = true; 
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
}


function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}


function resetGame() {
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
  createBoard();
}

document.getElementById("resetBtn").addEventListener("click", resetGame);

createBoard();
