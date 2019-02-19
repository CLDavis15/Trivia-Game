$(document).ready(function(){
    

$("#start").on("click", trivia.StartGame);
$(document).on("click", )

})

var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 25,
    timerOn: false,
    timerId: " ",

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
    },


startGame: function(){

    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    trivia.currentSet = 0;
    clearInterval(trivia.timerId);

    $("#game").show();

    $("#results").html(" ");

    $("#start").hide();

    $("#timer").text(trivia.timer);

    $("#remaining-time").show();

    trivia.nextQuestion();

},

nextQuestion: function(){
    trivia.timer = 25;

    $("#timer").removeClass("last-seconds");

    $("#timer").text(trivia.timer);

    if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
    };
    
    var questionValue = Object.values(trivia.questions)[trivia.currentSet];
    $("#question").text(questionsValue);

    var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
    $.each(questionOptions, function(index, key){
        $("#options").append($("<button class='option btn btn-info btn-md'>" + key + "</button>"));

    });
    
},





}
