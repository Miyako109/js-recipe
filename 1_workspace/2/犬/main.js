const imageElement = document.getElementById("dog-image")
const button = document.getElementById("button")

button.onclick = function(){
  change()
}


// 指定したサーバーにデータを取りに行く
const change = function(){
  fetch("https://dog.ceo/api/breed/Akita/images/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
}

