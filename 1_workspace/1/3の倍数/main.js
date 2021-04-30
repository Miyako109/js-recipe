const button = document.getElementById("button")


//countの実行内容
const count = function(number){
for( let i = 1; i <= number; i++ ){
  if (i % 3 === 0){
    console.log(i + "!!!!!!!")
  }else{
    console.log(i)
  }
}
}

//クリックしたら、intervalを使ってcountを実行
 

button.onclick = function(){
setInterval(count(24), 1000)
}





