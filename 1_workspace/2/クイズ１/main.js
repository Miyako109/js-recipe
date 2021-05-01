const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button = document.getElementById("button")
const feedback = document.getElementById("feedback")


const quiz = {
    text:"この数字は何を表す？",
    image:"Two.jpeg",
    choices:[
        {
            text: "1",
      feedback:
        "残念！",
        },
        {
            text: "2",
            feedback: "正解！",
          },
          {
            text: "3",
            feedback: "残念ドンマイ",
          },
          {
              text:"4",
              feedback:"あーあ"
          }
    ]
}

const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    const button4 = document.createElement('button')

    const buttonElement = function(){
        button1.textContent ="1"
        button2.textContent ="2"
        button3.textContent ="3"
        button4.textContent ="4"
    }


// quiz を画面に表示する関数
const reloadQuiz = function() {
    // 問題文を表示
    quizText.textContent = "Q. " + quiz.text
  
    // 画像を表示
    quizImage.src = "./images/" + quiz.image
  
    // 選択肢（ボタン）の中身を表示
    buttonElement()

    button.append(button1)
    button.append(button2)
    button.append(button3)
    button.append(button4)

  }

const choose = function(choiceNumber){
feedback.textContent = quiz.choices[choiceNumber].feedback
}

button1.onclick = function(){
    choose(0)
}
button2.onclick = function() {
    // ゼニガメを選択
    choose(1)
  }
  button3.onclick = function() {
    // ガニメデを選択
    choose(2)
  }
  button4.onclick = function(){
      choose(3)
  }
      


  reloadQuiz()
