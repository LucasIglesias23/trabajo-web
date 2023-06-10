let btnmenu = document.getElementById("abrir-menu");
btnmenu.addEventListener("click", desplegarmenu);
function desplegarmenu(){
    document.querySelector(".nav-list").classList.toggle("desplegar")
}

document.getElementById('btn-compra1').addEventListener('click', compra1);
document.getElementById('btn-compra3').addEventListener('click', compra3);
document.getElementById('clean').addEventListener('click', borrar);

let producto = [{
    nombre: "",
    cantidad: ""
}]

mostrarCarrito();

function compra1() {
    let nombre = document.getElementById('producto').value;
    let productoNuevo = {
        nombre: nombre,
        cantidad: "1",
    }
    producto.push(productoNuevo);
    mostrarCarrito();
}

function compra3() {
    let nombre = document.getElementById('producto').value;
        let productoNuevo = {
            nombre: nombre,
            cantidad: "1",
        }
        producto.push(productoNuevo);
        producto.push(productoNuevo);
        producto.push(productoNuevo);
        mostrarCarrito();

}

function borrar() {
    producto = [];
    mostrarCarrito();
}

function mostrarCarrito() {
    let carrito = document.getElementById('carrito');
    carrito.innerHTML = '';
    for(const item of producto){
        carrito.innerHTML += "<tr>" + "<td>" + item.nombre +"</td>" + "<td>" + item.cantidad +"</td>" + "</tr>"
    }
}


