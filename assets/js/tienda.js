const productosContainer = document.getElementById('productos-container');

baseDeDatos.forEach(producto => {
    if(producto.descuento > 0){
        const articuloProducto = document.createElement('article');
        articuloProducto.classList.add('productoA');
        articuloProducto.innerHTML = `
            <img class="producto-img" src="../public/Images/${producto.img}" alt="${producto.alt}">
            <h2 class="producto-titulo">${producto.nombre}</h2>
            <h2 class="producto-subtitulo">${producto.autor}</h2>
            <p class="producto-precio">$${producto.precio.toLocaleString()} <span class="descuento">(-${producto.descuento}%)</span></p>
            <div class="oculto">
                <button class="btn"><a class="a" href="./detalles.html">Ver detalles</a></button>
                <button class="btn" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, ${producto.precio * producto.descuento / 100}, ${producto.id})">Agregar al Carrito</button>
            </div>    
            `;
        productosContainer.appendChild(articuloProducto);
    }else{
        const articuloProducto = document.createElement('article');
        articuloProducto.classList.add('productoB');
        articuloProducto.innerHTML = `
            <img class="producto-img" src="../public/Images/${producto.img}" alt="${producto.alt}">
            <h2 class="producto-titulo">${producto.nombre}</h2>
            <h2 class="producto-subtitulo">${producto.autor}</h2>
            <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
            <div class="oculto">
                <button class="btn"><a class="a" href="./detalles.html">Ver detalles</a></button>
                <button class="btn" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, ${0}); event.stopPropagation();">Agregar al carrito</button>
            </div>    
            `;
        productosContainer.appendChild(articuloProducto);
    }
});