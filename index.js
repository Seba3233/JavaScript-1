let precio = 400000
let cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function actualizarPrecio() {
    let valorTotal = precio * cantidad; document.getElementById("valorTotal").textContent = valorTotal
}
function cambiaCantidad(cambio) {
    cantidad += cambio ;
    if (cantidad < 0) {
        cantidad = 0;
    }
document.getElementById("cantidad").textContent = cantidad;
actualizarPrecio();
}
