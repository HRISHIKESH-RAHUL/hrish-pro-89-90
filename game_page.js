player_1_name = localStorage.getItem("player_1_name") ;
player_2_name = localStorage.getItem("player_2_name") ;

player_1_score = 0 ;
player_2_score = 0 ;

document.getElementById("player_1_name").innerHTML = player_1_name + ":" ;
document.getElementById("player_2_name").innerHTML = player_2_name + ":" ;

document.getElementById("player_1_score").innerHTML = player_1_score ;
document.getElementById("player_2_score").innerHTML = player_2_score ;

document.getElementById("player_qns").innerHTML = "Question Turn - " + player_1_name ;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player_2_name ;