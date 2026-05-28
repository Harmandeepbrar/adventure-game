let currentState = "start";

function renderQuestion(){
    const question = document.getElementById("question");
    const answers = document.getElementById("answers")

    answers.innerHTML = ""
    
    if (currentState === "start") {

        question.textContent = "Your first day at Walmart begins! Choose your role:";
    }
}
