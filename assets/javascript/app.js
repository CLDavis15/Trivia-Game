$(document).ready(function(){

    

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 25;
    var timerOn = false;
    var timerId = " ";
    

    var trivia = {
        currentSet: 0,
        questions: {
            q1: "Who is the famous basketball player that played for the Chicago Bulls?",
            q2: "What city held the NBA All Star game in 2019?",
            q3: "Who is the most famous Yankee nicknamed 'The Great Bambino'?",
            q4: "What is the NFL's most conveted trophy?",
            q5: "What city does the Red Sox play in?",
        
        },
    
        options: {
            q1: ["Scottie Pippen", "Michael Jordan", "Larry Bird", "Magic Johnson"],
            q2: ["Miami", "Boston", "Charlotte", "Atlanta"],
            q3: ["Babe Ruth", "Ted Williams", "Yogi Berra", "Derek Jeter"],
            q4: ["Stanley Cup", "World Cup Trophy", "Claret Jug", "Vince Lombardi"],
            q5: ["Los Angeles", "New York", "Boston", "Nashville"],
        },
    
        answers: {
            q1: "Michael Jordan",
            q2: "Charlotte",
            q3: "Babe Ruth",
            q4: "Vince Lombardi",
            q5: "Boston",
        }
    };


    function startGame() {
    
        correct = 0,
        incorrect = 0,
        unanswered = 0,
    
        currentSet = 0,
        clearInterval(timerId);
    
        $("#game").show();
    
        $("#results").html(" ");
    
        $("#start").hide();
    
        $("#timer").text(timer);
    
        $("#remaining-time").show();
    
        nextQuestion();

    };


    function nextQuestion(){

        timer = 25;
        

        $("#timer").html("<h3>Time Remaining: " + timer + "</h3>");
    

        var questionValue = Object.values(trivia.questions);
        $("#question").text(questionValue);
    
        if(!timerOn){
        timerId = setInterval(timerRunning, 1000);

        };
    
        $("#question").text(questionsValue);
    
        var questionOptions = Object.values(trivia.options);
    
        $.each(questionOptions, function(){
        $("#options").append($("<button class='option btn btn-info btn-md'>" + key + "</button>"));
        
        })
    };

    

    function timerRunning(){

        

        $("#timer").html("<h3> Time Remaining: " + timer + "</h3>");

        
    
        if(timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $("#timer").text(timer);
            timer--;

        }
        
        else if(timer === -1){
            unanswered++;
            result = false;
            clearInterval(timerId);
        
            resultId = setTimeout(guessResult, 1000);
            $("#results").html("<h2>Times Up! The answer was " + Object.values(trivia.answers)[currentSet] + "</h2>");
        }

        else if(currentSet === Object.keys(trivia.questions).length){
        
            $("#results").html("<h3> Good Game!</h3>"
            + "<p>Correct: " + correct + "</p>" +
            "<p>Incorrect: " + incorrect + "</p>"
            + "<p>Unanswered: " + unanswered + "</p>"
            + "<p>Play Again!</p>");
        
            $("#game").hide();
        
            $("#start").show();
        
        }
    
    }


    function guessChecker(){
    
        var resultId = 0;
    
        var rightAnswer = Object.values(trivia.answers)[trivia.currentSet];
    
        if($(resultId).text() === rightAnswer){
        
            $(resultId).addClass("btn-success").removeClass("btn-info");
        
            correct++;
            clearInterval(timerId);
            resultId = setTimeout(guessResult, 1000);
            $("#results").html("<h3>Correct Answer!</h3>");
        
        }
        else{
        
            $(resultId).addClass("btn-danger").removeClass("btn-info");
        
            incorrect++;
            clearInterval(timerId);
        
            resultId = setTimeout(guessResult, 1000);
            $("#results").html("<h3>Better try next time!" + rightAnswer + "</h3>");
        
        }
    
    };

    function guessResult() {
    
        trivia.currentSet++;
    
        $(".option:").remove();
        $("#results h3").remove();
    
        nextQuestion();
    
    };


    $("#start").on("click", function(){
        startGame()});

    $("#remaining-time").hide();
    
    $(document.body).on("click", ".option", guessChecker);

});
