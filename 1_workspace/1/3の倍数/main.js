const FizzBuzz = function(number){
  for(let n = 0; n <= number; n++){
    if(n % 3 === 0 ||String(n).includes("3")){
      console.log(n + "!!!!!")
    }else {
      console.log(n)
    }
  }
} 


FizzBuzz(100)
