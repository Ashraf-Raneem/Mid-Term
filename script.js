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
    var borderWidth = $("#border-Width").val()

    $("#letter-container").css("border-radius","2px");
})

$("#background").click(function(){
    $(this).toggleClass("active");
    $("#colors .button").click(function(){
        if(this.id="#violet"){
            $("#letter-container").css("background","violet");
        }
        else if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        else if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        else if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        else if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        else if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        else if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        else if(this.id="#white"){
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
        else if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        else if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        else if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        else if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        else if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        else if(this.id="#white"){
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
        else if(this.id="#indigo"){
            $("#letter-container").css("background","indigo")
        }
        else if(this.id="#blue"){
            $("#letter-container").css("background", "blue")
        }
        else if(this.id="#green"){
            $("#letter-container").css("background", "green")
        }
        else if(this.id="#yellow"){
            $("#letter-container").css("background","yellow")
        }
        else if(this.id="#orange"){
            $("#letter-container").css("background","orange")
        }
        else if(this.id="#red"){
            $("#letter-container").css("background","red")
        }
        else if(this.id="#white"){
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
        else if(this.id="#indigo"){
            $("#letter-container").css("border-color","indigo")
        }
        else if(this.id="#blue"){
            $("#letter-container").css("border-color", "blue")
        }
        else if(this.id="#green"){
            $("#letter-container").css("border-color", "green")
        }
        else if(this.id="#yellow"){
            $("#letter-container").css("border-color","yellow")
        }
        else if(this.id="#orange"){
            $("#letter-container").css("border-color","orange")
        }
        else if(this.id="#red"){
            $("#letter-container").css("border-color","red")
        }
        else if(this.id="#white"){
            $("#letter-container").css("border-color","white")
        }
    })
})