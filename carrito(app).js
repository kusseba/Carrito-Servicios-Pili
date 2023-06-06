$(document).ready(function() {
    let carrito = [];
    
    $('.draggable').draggable({
      revert: 'invalid',
      helper: 'clone'
    });
    
    $('.droppable').droppable({
      accept: '.draggable',
      drop: function(event, ui) {
        const producto = ui.helper.clone();
        const nombre = producto.data('nombre');
        
        carrito.push(nombre);
        actualizarListaCarrito();
      }
    });
    
    $('#enviar-whatsapp').on('click', function() {
      const productosTexto = carrito.join(', ');
      const mensajeWhatsApp = 'Ul cliente solicita los siguientas comidas: ' + productosTexto;
      const urlWhatsApp = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(mensajeWhatsApp);
      
    
      window.open(urlWhatsApp, '_blank');
      
    
      carrito = [];
      actualizarListaCarrito();
    });
    
    function actualizarListaCarrito() {
      const listaCarrito = $('#lista-carrito');
      listaCarrito.empty();
      
      for (let i = 0; i < carrito.length; i++) {
        const itemCarrito = $('<li></li>');
        itemCarrito.text(carrito[i]);
        listaCarrito.append(itemCarrito);
      }
    }
  });
  