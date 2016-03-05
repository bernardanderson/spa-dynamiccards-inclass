var cardArea = document.getElementById("card-area");
var createCard = document.getElementById("create-card");

function buildCard() {
  var newCard = document.createElement("div");
  var inputText = document.getElementById("new-card-text").value;
  var newButton = document.createElement("button");
  newButton.textContent = "Delete Card";
  newCard.textContent = inputText;
  newCard.appendChild(newButton);

  cardArea.appendChild(newCard);
}

function deleteCard(clickEventObject) {
  
  if (clickEventObject.target !== clickEventObject.currentTarget) {
    clickEventObject.currentTarget.removeChild(clickEventObject.target.parentElement);
  };
  clickEventObject.stopPropagation();
}

createCard.addEventListener("click", buildCard);
cardArea.addEventListener("click", deleteCard);