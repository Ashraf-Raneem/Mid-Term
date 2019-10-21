/* Add your script here */
$("#border-width").click(function(){
    var letter1 = $("#letter1").val().toLowerCase().css("font-size","32px");
    var letter2 = $("#letter2").val().toLowerCase().css("font-size","18px");

    $("#letter-container").append(letter1).append(letter2); 
})



$("#submitBtn").click(function(){
    var borderWidth = $("#border-Width").val()

    $("#letter-container").css("border-width","borderWidth").css("border-radius","2px");
})