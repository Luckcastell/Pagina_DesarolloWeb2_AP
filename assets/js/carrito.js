let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio, descontado, id) {
    let precioFinal = precio - descontado;
    totalCarrito += precioFinal;
    document.getElementById('totalCarrito').innerText = totalCarrito.toLocaleString();
    carrito.push({nombre, precioFinal, precio, descontado, id});
    mostrarContenidoCarrito();
    abrirCarrito();
}

function mostrarContenidoCarrito() {
    const contenidoCarrito = document.getElementById('contenidoCarrito');
    contenidoCarrito.innerHTML = '';
    carrito.forEach(item => {
        if(item.descontado > 0){
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito-item');
            itemCarrito.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>$${item.precio.toLocaleString()} - $${item.descontado.toLocaleString()}</p>
                <button onclick="eliminarProducto(${item.id})"">X</button>
            `;
            contenidoCarrito.appendChild(itemCarrito);
        }
        else{
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito-item');
            itemCarrito.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>$${item.precioFinal.toLocaleString()}</p>
                <button onclick="eliminarProducto(${item.id})"">X</button>
            `;
            contenidoCarrito.appendChild(itemCarrito);
            }
    });
    
}

function abrirCarrito() {
    document.getElementById('modalCarrito').style.display = 'flex';
}

function cerrarCarrito() {
    document.getElementById('modalCarrito').style.display = 'none';
}

function eliminarProducto(id) {
    const indice = carrito.findIndex(item => item.id === id); // Encontrar el índice del primer producto seleccionado
    
    if (indice !== -1) { // Si se encuentra el producto lo elimina
        carrito.splice(indice, 1); // lo elimina solo una vez 
    }
    totalCarrito = carrito.reduce((total, item) => total + item.precioFinal, 0); // Actualiza el carrito
    document.getElementById('totalCarrito').innerText = totalCarrito.toLocaleString(); // Actualiza el texto en pantalla
    
    mostrarContenidoCarrito();
}




function BorrarTodoElCarrito() {
    carrito = [];
    totalCarrito = 0;
    document.getElementById('totalCarrito').innerText = totalCarrito.toLocaleString();
    mostrarContenidoCarrito();
    cerrarCarrito();
}

function finalizarCompra() {
    alert('Compra finalizada. ¡Gracias por su compra!');
    BorrarTodoElCarrito();
}