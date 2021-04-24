const imageElement = document.getElementById("cat-image")
const Button = document.getElementById("button")

Button.onclick = function(){

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res)=> {
  return res.json()
  })
  .then((date)=>{
    imageElement.src = date.message
})
}


