var color=["red","green","blue","yellow"];
function randomNumber(){
    var a=Math.floor(Math.random()*4);
    return a;
}
var computerGenerated=[];
var userGenerated=[];
var level=0;

function colorGenerator(){
    userGenerated=[];
    var random=randomNumber();
    var randomColor=color[random];
    computerGenerated.push(randomColor);
    setTimeout(function(){
        $("#"+randomColor).fadeOut().fadeIn();
    },50);
}
$(".btn").click(function(){
    var color1=$(this).attr("id");
    animation(color1);
    userGenerated.push(color1);
    var audio1=new Audio("sounds/"+color1+".mp3");
    audio1.play();
    checkAccuracy(userGenerated.length-1);
});
function animation(color1){
    $("#"+color1).addClass("pressed");
    setTimeout(function(){
        $("#"+color1).removeClass("pressed")
    },50);
}
function checkAccuracy(currentLevel){
    if(computerGenerated[currentLevel]===userGenerated[currentLevel]){
        if(computerGenerated.length===userGenerated.length){
            level++;
            $("#level-title").text("Level "+level);
            colorGenerator();
        }
    }
    else{
        gameOver();
    }
}
function gameOver(){
    level=0;
    $("#level-title").text("Game-Over Press A to Restart");
    computerGenerated=[];
    userGenerated=[];
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },50);
}
$(document).keypress(function(event){
    var z=event.key;
    if(z.toUpperCase()==="A"){
        colorGenerator();
        $("#level-title").text("Level "+level);
    }
    else{

    }
});
$("#level-title").click(function(){
    
    colorGenerator();
    $("#level-title").text("Level "+level);  
});
