const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e){
    console.log(e.key)
}

inputText.onkeydown = logValue
inputDate.onkeydown = logValue