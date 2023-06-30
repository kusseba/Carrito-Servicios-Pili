// Obtener referencia a los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.btn-primary');

// Obtener referencia a la lista de compras
const listaCompras = document.getElementById('lista-carrito');

// Agregar evento click a los botones "Agregar al carrito"
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  event.preventDefault();
  
  const producto = event.target.dataset.id;
  const productoSeleccionado = obtenerProducto(producto);

  // Crear elemento de lista y agregar el producto seleccionado
  const itemLista = document.createElement('li');
  itemLista.textContent = productoSeleccionado.nombre;

  // Agregar el elemento a la lista de compras
  listaCompras.appendChild(itemLista);
}

// Función para obtener el producto seleccionado
function obtenerProducto(id) {
  // Aquí puedes implementar la lógica para obtener el producto según su ID
  // Por ahora, se utiliza un objeto estático con algunos productos de ejemplo
  const productos = [
    { id: '1', nombre: 'Asado a la estaca', descripcion: 'Carnes a elección: Vacuna, Chivo o Chancho' },
    { id: '2', nombre: 'Chorizos', descripcion: 'Se venden por docena o por kilo según la elección del cliente.' },
    { id: '3', nombre: 'Carne con pure', descripcion: 'La guarnición es a elección del cliente'},
    { id: '4', nombre: 'Morcillas', descripcion: 'Se venden por docena y por kilo'},
    { id: '5', nombre: 'Picadas', descripcion: 'Los ingredientes son a eleciión del cliente'},
    { id: '6', nombre: 'Sanwiches', descripcion: 'Pueden ser de palata y queso o de verduras'},
    { id: '7', nombre: 'Pizzas', descripcion: 'Se venden como comunes, especiales o con salame'},
    { id: '8', nombre: 'Ensaladas de lechuga y tomate', descripcion: 'La lechuga o el tomate pueden ser reemplazos por otros ingredientes'},
    { id: '9', nombre: 'Ensalada de papa', descripcion: 'Los aderesos y otras ingredientes son opcionales'},
    { id: '10', nombre: 'Helados', descripcion: 'Contamos con una gran selección de sabores destacando los clasicos'}

    // Agrega el resto de los productos aquí
  ];

  return productos.find((producto) => producto.id === id);
}
