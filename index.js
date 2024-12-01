



// Seleccionamos el botón "Order Now" de la sección principal
const botonOrdenar = document.querySelector(".btn");

// Seleccionamos todos los botones "Buy Now" de la sección de servicios
const botonesComprar = document.querySelectorAll(".btn-1");

// Agregamos un evento al botón "Order Now"
botonOrdenar.addEventListener("click", () => {
    alert("¡Gracias por tu interés! Te redirigiremos a la página de pedidos.");
});

// Agregamos un evento a cada botón "Buy Now"
botonesComprar.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("¡Producto agregado al carrito!");
    });
});
