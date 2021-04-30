const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
  //countの値を100で割った数をdisplayに表示
}

let id = null

button.onclick = function() {
if ( id === null){
  id = setInterval(countUp, 10)
  button.textContent = "stop"
}else{

  //Intervalを止めているだけなので、idにまだ奴はいる
clearInterval(id)
id = null
button.textContent = "start"
}
}

  