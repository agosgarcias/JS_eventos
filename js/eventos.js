let enviarCarrito = document.getElementsByClassName("button")

enviarCarrito.onclick = () => {
    let category = document.getElementById("main");
    category.parentNode.removeChild(category)
    console.log("Voy a limpiar el carrito")
}


/////////////////////////////////////////
/*Voy a trasladar de un lugar a otro los productos, el finde me pongo al día =)*/
