/* Add your script here */

$("#border-Width").click(function(){
    var letter1 = $("#letter1").val().toUpperCase()
    let l1 = $("<h3>").text(letter1).css("font-size","32px").css("display","inline");

    var letter2 = $("#letter2").val().toLowerCase()
    let l2 = $("<p>").text(letter2).css("font-size","18px").css("display","inline");

    //let totalletters = l1l2 ;
    $("#letter-container").children().remove();
    $("#letter-container").append(l1).append(l2);  
})

$("#border-width").change(function(){
    var borderWidth = parseInt($("#border-Width").val())+"px"; 
    $(this).css("#border-Width", "borderWidth")
})


$("#submitBtn").click(function(){
    $("#letter-container").css("border-radius","2px");
})

$("#background").click(function(){
    $(this).toggleClass("active");
    $("#colors .button").click(function(){
        if(this.id="#violet"){
            $("#letter-container").css("background","violet");
        }
        if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        else if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        if(this.id="#white"){
            $("#letter-container").css("background","white")
        }
    })
})

$("#letter1-color").click(function(){
    $(this).toggleClass("active");
    $("#colors .button").click(function(){
        if(this.id="#violet"){
            $("#letter-container").css("background","violet");
        }
        if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        if(this.id="#white"){
            $("#letter-container").css("background","white")
        }
    })
})
$("#letter2-color").click(function(){
    $(this).toggleClass("active");
    $("#colors .button").click(function(){
        if(this.id="#violet"){
            $("#letter-container").css("background","violet");
        }
        if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        else if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        if(this.id="#white"){
            $("#letter-container").css("background","white")
        }
    })
})
$("#border").click(function(){
    $(this).toggleClass("active");
    $("#colors .button").click(function(){
        if(this.id="#violet"){
            $("#letter-container").css("border-color","violet");
        }
        if(this.id="#indigo"){
            $("#letter-container").css("border-color","indigo")
        }
        if(this.id="#blue"){
            $("#letter-container").css("border-color", "blue")
        }
        if(this.id="#green"){
            $("#letter-container").css("border-color", "green")
        }
        if(this.id="#yellow"){
            $("#letter-container").css("border-color","yellow")
        }
        if(this.id="#orange"){
            $("#letter-container").css("border-color","orange")
        }
        if(this.id="#red"){
            $("#letter-container").css("border-color","red")
        }
        if(this.id="#white"){
            $("#letter-container").css("border-color","white")
        }
    })
})