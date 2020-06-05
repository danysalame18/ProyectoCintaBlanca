
var contaClicks = 0;

function agregarCarrito(){
    var img1 = document.getElementById("imagenCar1");
    var pre1 =  document.getElementById("precio1");
    contaClicks ++;
    img1.innerHTML =` <img src="sudadera5.jpg"/>`;
    pre1.innerHTML = "$52.99";
    img1.style.Width = "300px";
}