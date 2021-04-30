const button = document.getElementById("button")

//変数countを定義して、
let count = 1

const countUp = function(){

  //その定義されたcountが3の倍数か否か確かめる
  if(count % 3 === 0){
    console.log(count + "!!!!!!")
  }else{
    console.log(count)
  }
 //確かめたら、countを1増やす。
  count += 1

}
//クリックしたら、intervalを使ってcountを実行
 

button.onclick = function(){
setInterval(countUp, 1000)

//countUpはcountの値を変えながら1秒ずつ実行される。
}





