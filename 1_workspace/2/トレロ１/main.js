const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const container2 = document.getElementById("cards-container2")
const container3 = document.getElementById("cards-container3")

//ぎーくでエンター押されたときの処理
inputElement.onkeypress = function(e) {
  if(e.keyCode === 13){
const card = createCard(inputElement.value)
container.append(card)

inputElement.value = ""
  }
}
//大学でエンター押されたときの処理
inputElement2.onkeypress = function(e) {
  if(e.keyCode === 13){
const card = createCard(inputElement2.value)
container2.append(card)

inputElement2.value = ""
  }
}

//家事でエンター押されたときの処理
inputElement3.onkeypress = function(e) {
  if(e.keyCode === 13){
const card = createCard(inputElement3.value)
container3.append(card)

inputElement3.value = ""
  }
}


const createCard = function(text){
  
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
      card.remove()
  }
  card.append(deleteButton)

 return card
}


 