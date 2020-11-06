function login(){
    player_1name=document.getElementById("player1").value;
    player_2name=document.getElementById("player2").value;

    localStorage.setItem("player1_name",player_1name);
    localStorage.setItem("player2_name",player_2name);
    window.location="quiz_game_page.html";
}