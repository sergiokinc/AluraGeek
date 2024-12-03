// Selección de elementos del DOM
const productForm = document.getElementById('product-form');
const productsGrid = document.querySelector('[data-productos]');

// Array para almacenar productos
let productos = [];

// Función para crear un nuevo producto
function crearProductoElemento(producto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-container--info">
            <p>${producto.nombre}</p>
            <div class="card-container--value">
                <p>$ ${producto.precio}</p>
                <img src="./images/basura.png" alt="Eliminar" class="delete-icon">
               
            </div>
        </div>
    `;

    // Añadir evento de eliminación
    const deleteIcon = card.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => eliminarProducto(producto));

    return card;
}

// Función para renderizar productos
function renderizarProductos() {
    // Limpiar grid de productos
    productsGrid.innerHTML = '';

    // Mostrar mensaje si no hay productos
    if (productos.length === 0) {
        const noProductsMsg = document.createElement('div');
        noProductsMsg.classList.add('no-products');
        noProductsMsg.textContent = 'No se han agregado productos';
        productsGrid.appendChild(noProductsMsg);
        return;
    }

    // Renderizar productos
    productos.forEach(producto => {
        productsGrid.appendChild(crearProductoElemento(producto));
    });
}

// Función para agregar producto
function agregarProducto(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    // Crear objeto de producto
    const nuevoProducto = {
        id: Date.now().toString(), // Generar ID único
        nombre,
        precio,
        imagen
    };

    // Añadir producto al array
    productos.push(nuevoProducto);

    // Renderizar productos actualizados
    renderizarProductos();

    // Resetear formulario
    productForm.reset();
}

// Función para eliminar producto
function eliminarProducto(productoAEliminar) {
    // Filtrar productos para eliminar el producto específico
    productos = productos.filter(producto => producto.id !== productoAEliminar.id);

    // Renderizar productos actualizados
    renderizarProductos();
}

// Evento de envío de formulario
productForm.addEventListener('submit', agregarProducto);

// Renderizar productos iniciales (vacío en este caso)
renderizarProductos();