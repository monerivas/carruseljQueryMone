/*$(document).ready(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slider');}, 4000);
});*/




$(document).ready(function () {
    $('#slider div:gt(0)').hide();

    $("#boton1").click(function () {
        $("#img1").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img1").fadeOut();
    });

    $("#boton2").click(function () {
        $("#img2").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img2").fadeOut();
    });

    $("#boton3").click(function () {
        $("#img3").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img3").fadeOut();
    });

    $("#boton4").click(function () {
        $("#img4").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img4").fadeOut();
    });

    $("#boton5").click(function () {
        $("#img5").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img5").fadeOut();
    });


});




/*$(document).ready(function () {
    $("#boton2").click(function () {
        $("#img2").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img2").fadeOut();
    });
});


$(document).ready(function () {
    $("#boton3").click(function () {
        $("#img3").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img3").fadeOut();
    });
});


$(document).ready(function () {
    $("#boton4").click(function () {
        $("#img4").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img4").fadeOut();
    });
});


$(document).ready(function () {
    $("#boton5").click(function () {
        $("#img5").fadeIn("slow");
        $(".ocultarEstaImagen").not("#img5").fadeOut();
    });
});*/






/*---------Ejemplos de sistaxis de jQuery-----------*/

/*$(document).ready(function(){
    alert("Hola guapa")
    
});*/


/*Esta funcion es con JS vanilla*/
/*function saludar() {
    document.getElementById("saludo").innerHTML = "hola chula";
}*/


/*Esta funcion es con jQuery*/
/*$(document).ready(function () {
    $("button").click(function () {
        $("#saludo").append("Hola soy un saludo con jQuery");
    });
});*/


/*function agregarLista() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("mas comida");
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}*/

/*
$(document).ready(function () {
    $("button").click(function () {
        $("#lista").append("<li>mas comida jQuery</li>")
    });
});
*/


/*function cambiarColor(){
    document.getElementById("resaltar").style.color="red";    
}*/

/*$(document).ready(function(){
    $("#cambiarColor").click(function(){
        $("#resaltar").css("color", "red");        
    });
});

*/
