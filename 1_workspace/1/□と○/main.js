const figure = document.getElementById("figure")

figure.onclick= function(){

//マルにする(roundedとtryangleがない場合,squareだけの場合)＝□から〇
if(figure.classList.contains("square") === true){
figure.classList.remove("square")
figure.classList.add("rounded")

//roundedを持ってたらそれを消してtryangleを追加。=〇から△

}else if(figure.classList.contains("rounded") === true){
  figure.classList.remove("rounded")
  figure.classList.add("tryangle")

  //tryangle持ってたらそれを消してsquareだけにする。△から□
}else if(figure.classList.contains("tryangle")){
  figure.classList.remove("tryangle")
  figure.classList.add("square")
}

}
