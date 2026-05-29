let currentState = "start";

function renderQuestion(){
    const question = document.getElementById("question");
    const answers = document.getElementById("answers")

    answers.innerHTML ="";
    
    if (currentState === "start") {

        question.textContent = "Your first day at Walmart begins! Choose your role:";

        addAnswerButton("Sales Associate", "sales_associate");
        addAnswerButton("Manager", "manager");
        addAnswerButton("Stock Associate", "stock_associate");

    }


    function addAnswerButton(text, nextState) {

    const btn = document.createElement("button");

    btn.textContent = text;

    btn.addEventListener("click", () => {

        currentState = nextState;   // updates state

        renderQuestion();           // refreshes story (VERY IMPORTANT)
    });

    document.getElementById("answers").appendChild(btn);
}

    //Sales associate Path
    
    //decision 1
    else if (currentState === "sales_associate") {

        question.textContent = "The checkout line becomes very long.";

        addAnswerButton("Work fast to help customers", "sales_associate_2");
        addAnswerButton("Call another worker for help", "sales_associate_2");
    }

    //decision 2`
    else if (currentState === "sales_associate_2") {

    question.textContent = "A customer cannot find a product.";
    addAnswerButton("Help the customer find it", "sales_associate_2_end");
    addAnswerButton("Tell them to ask someone else", "sales_associate_2_end");
    }

    else if (currentState === "sales_associate_2_end") {

    question.textContent = "Your Sales Associate shift is over.";
}


    //Manager Path
    else if (currentState === "manager") {

        question.textContent = "Employees are struggling on a busy day.";

        addAnswerButton("Help employees", "manager_2");
        addAnswerButton("Focus on store profits", "manager_2");
    }

    else if (currentState === "manager_2") {

    question.textContent = "Customer complains about the store service.";

    addAnswerButton("Solve the issue calmly", "manager_end");
    addAnswerButton("Ignore the complaint", "manager_end");
    }

    else if (currentState === "manager_end") {

    question.textContent = "Your Manager shift is over.";
    }


    // Stock_associate Path
    else if (currentState === "stock_associate") {

        question.textContent = "New stock arrived at store.";

        addAnswerButton("Organize products carefully", "stock_associate_2");
        addAnswerButton("Complete the work quickly, ignoring efficiency", "stock_associate_2");
    }

    else if (currentState === "stock_associate_2") {

    question.textContent = "A coworker asks for help moving boxes.";

    addAnswerButton("Help your coworker", "stock_end");
    addAnswerButton("Complete your own tasks", "stock_end");
    }

    else if (currentState === "stock_end") {

    question.textContent = "Your Stock Associate shift is over.";
    }

}


