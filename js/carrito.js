const db = {
    metodos: {      
      encontrar: (id) => { 
        return db.items.find((item) => item.id === id);
      },
      remover: (items) => {
        items.forEach((item) => {
          const producto = db.metodos.encontrar(item.id);
          producto.cantidad = producto.cantidad - item.cantidad;
        });
      },
    },
    items: [
      {
        id: 0,
        titulo: "Nigiri de palta",
        imagen:
        "https://wasabisushisevilla.es/wp-content/uploads/2020/04/nigiri-aguacate-scaled-300x300.jpg",
        precio: 200,
        cantidad: 12,
        descripcion : "Bola de arroz cubierta con palta",
      },
      {
        id: 1,
        titulo: "Nigiri de salmon e ikura",
        imagen:
        "https://wasabisushisevilla.es/wp-content/uploads/2020/05/E.11-300x300.jpg",
        precio: 200,
        cantidad: 12,
        descripcion : "Bola de arroz cubierta con una feta de salmon e ikura",
      },
      {
        id: 2,
        titulo: "Nigiri de pez mantequilla",
        imagen:
           "https://wasabisushisevilla.es/wp-content/uploads/2020/05/E.4-300x300.jpg",
        precio: 200,
        cantidad: 12,
        descripcion : "Bola de arroz cubierta con una feta de pez mantequilla",
      },
      {
        id: 3,
        titulo: "Nigiri de langostino",
        imagen:
        "https://wasabisushisevilla.es/wp-content/uploads/2020/05/E.5-300x300.jpg",
        precio: 200,
        cantidad: 12,
        descripcion : "Bola de arroz cubierta con langostino",
      },
      {
        id: 4,
        titulo: "Nigiri de salmon",
        imagen:
        "https://wasabisushisevilla.es/wp-content/uploads/2020/05/E.2-300x300.jpg",
        precio: 200,
        cantidad: 12,
        descripcion : "Bola de arroz cubierta con palta",
      },
      {
        id: 5,
        titulo: "Maki de atun",
        imagen: 
             "https://wasabisushisevilla.es/wp-content/uploads/2020/04/A.1_maki_atun-300x300.jpg ",
        precio: 300,
        cantidad: 12,
        descripcion : "Roll envuelto en alga nori relleno de arroz y atun",
      },
      {
        id: 6,
        titulo: "Maki de salmon picante",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/A.4_maki_salmon_picante-300x300.jpg",
        precio: 300,
        cantidad: 12,
        descripcion : "Roll envuelto en alga nori relleno de arroz y salmon picante",
      },
      {
        id: 7,
        titulo: "Maki de salmon",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/A.3_maki_salmon-300x300.jpg",
        precio: 300,
        cantidad: 12,
        descripcion : "Roll envuelto en alga nori relleno de arroz y salmon",
      },
      {
        id: 8,
        titulo: "Maki de anguila",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/A.7_maki_anguila-300x300.jpg",
        precio: 300,
        cantidad: 12,
        descripcion : "Roll envuelto en alga nori relleno de arroz y anguila",
      },
      {
        id: 9,
        titulo: "Maki de pez mantequilla",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/A.6_maki_pez_mantequilla-300x300.jpg",
        precio: 300,
        cantidad: 12,
        descripcion : "Roll envuelto en alga nori relleno de arroz y pez mantequilla",
      },
      {
        id: 10,
        titulo: "Sashimi atun",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/G.2-300x300.jpg",
        precio: 500,
        cantidad: 12,
        descripcion : "Laminas de atun crudo con salsa de soja",
      },
      {
        id: 11,
        titulo: "Sashimi variado",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/G.1-300x300.jpg",
        precio: 900,
        cantidad: 12,
        descripcion : "Laminas de atun, pez mantequilla y salmon crudas con salsa de soja",
      },
      {
        id: 12,
        titulo: "Tataki de atun",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/G.5-300x300.jpg",
        precio: 600,
        cantidad: 12,
        descripcion : "Laminas de atun ligeramente cocidas con salsa de soja",
      },
      {
        id: 13,
        titulo: "Sashimi Pez mantequilla",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/G.4-300x300.jpg",
        precio: 600,
        cantidad: 12,
        descripcion : "Laminas de pez mantequilla crudo con salsa de soja",
      },
      {
        id: 14,
        titulo: "Sashimi salmon",
        imagen:  
            "https://wasabisushisevilla.es/wp-content/uploads/2020/05/G.3-300x300.jpg",
        precio: 600,
        cantidad: 12,
        descripcion : "Laminas de salmon crudo con salsa de soja",
      }
    ],
  };
  
  const carritoCompra = {
    items: [],
    metodos: {
      agregar: (id, cantidad) => {
        const carritoItem = carritoCompra.metodos.obtener(id);
        if (carritoItem) {
          if (
            carritoCompra.metodos.inventario(id, cantidad + carritoItem.cantidad)
          ) {
            carritoItem.cantidad += cantidad;
          } else {         //CUANDO LA CANTIDAD SOLICITADA POR EL USUARIO EXCEDE LA CANTIDAD PERMITIDA POR COMPRA SE MUESTRA ESTA ALERTA = 
            Swal.fire({
              icon: 'error',
              title: 'Hasta ahi!!!',
              text: 'Las compras por el sitio son de un maximo de 12 piezas por cada producto, para compras por mayor consultanos por el formulario de contacto, o por nuestras redes',
              footer: '<a href="https://web.whatsapp.com/" target="_blank">Pincha aqui para dirigirte a nuestro WhatsApp</a>'
            })
          }
        } else {
          carritoCompra.items.push({ id, cantidad });
          localStorage.setItem("Producto", carritoCompra.items)
        }
      },
      remover: (id, cantidad) => {
        const carritoItem = carritoCompra.metodos.obtener(id);
        if (carritoItem.cantidad - cantidad > 0) {
          carritoItem.cantidad -= cantidad;
        } else {
          carritoCompra.items = carritoCompra.items.filter(
            (item) => item.id !== id
          );
        }
      },
      contar: () => {
        return carritoCompra.items.reduce(
          (acumulador, item) => acumulador + item.cantidad,
          0
        );
      },
      obtener: (id) => {
        const indice = carritoCompra.items.findIndex((item) => item.id === id);
        return indice >= 0 ? carritoCompra.items[indice] : null;
      },
      obtenerTotal: () => {
        const total = carritoCompra.items.reduce((acumulador, item) => {
          const encontrado = db.metodos.encontrar(item.id);
          return acumulador + encontrado.precio * item.cantidad;
        }, 0);
        return total;
      },
      inventario: (id, cantidad) => {
        return (
          //** Preguntar **/
          // db.metodos.encontrar((item) => item.id === id).cantidad - cantidad >= 0
          db.metodos.encontrar(id).cantidad - cantidad >= 0 ? true : false
        );
      },
      comprar: () => {
        db.metodos.remover(carritoCompra.items);
        carritoCompra.items = [];
      },
      vaciar: () => {
        carritoCompra.items = [];
      },
    },

  };
  
  //**** hago un render de los productos ****
  mostrarTienda();
  
  //**** inicio mostrarTienda ****/
  function mostrarTienda() {
    
    const html = db.items.map((item) => {
      return `
          <div class="item">
              <div >
                  <img class="imagen" src="${
                    item.imagen ? item.imagen : "../assets/no-image.jpg"
                  }" alt="${item.titulo}">
              </div>
              <div class="titulo">
                  ${item.titulo}
              </div>
              <div class="subtitulo">
              <details>
               <p>${item.descripcion}</p>
              </details>
              </div>
              <div class="precio">
                  ${numeroMoneda(item.precio)} ARS
              </div>
              <div>
                  <p>El precio reflejado es por cada unidad</p>
              </div>
              <div class="cantidad">
                  ${item.cantidad} Unidades disponibles
              </div>
  
              <div class="acciones">
                  <button class="agregar" data-id="${item.id}">
                      Agregar al carrito
                  </button>
              </div>
          </div>
          `;
    });
    document.querySelector("#tienda-contenedor").innerHTML = html.join("");
  
    document.querySelectorAll(".item .acciones .agregar").forEach((boton) => {
      boton.addEventListener("click", (evento) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: `Agregado al carrito`,
        })
        const id = parseInt(boton.getAttribute("data-id"));
        const item = db.metodos.encontrar(id);
        if (item && item.cantidad - 1 > 0) {
          carritoCompra.metodos.agregar(id, 1);
          mostrarCarrito();
        } 
      });
    });
  }
  
  //**** Inicio mostrarCarrito ****//
  function mostrarCarrito() {
    const html = carritoCompra.items.map((item) => {
      const dbItem = db.metodos.encontrar(item.id);
      return `
          <div class="item">
              <div class="titulo">${dbItem.titulo}</div>
              <div class="precio">${numeroMoneda(dbItem.precio)}</div>
              <div class="cantidad">${item.cantidad} Unidades</div>
              <div class="subtotal">
                  Subtotal:${numeroMoneda(item.cantidad * dbItem.precio)}
              </div>
              <div class="acciones">
              <button class="agregaruno" data-id="${item.id}"><i class='bx bx-message-square-add'></i></button>
              <button class="removeruno" data-id="${item.id}"><i class='bx bx-message-square-minus'></i></button>
              <button class="removertodo" data-id="${item.id}"><i class='bx bx-trash'></i></button>
              </div>
          </div>
      `;
    });
  
    const botonCerrar = `
      <div class="carrito">
          <button class="cerrar">Cerrar</button>
      </div>
    `;
  
    const botonComprar =
      carritoCompra.items.length > 0
        ? `
          <div class="carrito-acciones">
              <button id="comprar">Comprar</button>
              <button id="vaciar">Vaciar</button>
          </div>
  
          `
        : `
          <div class="carrito-vacio">
              <i class='bx bx-cart bx-tada'></i>
              <br>
              <strong>El carrito está vacío</strong>
          </div>
        `;
  
    const total = carritoCompra.metodos.obtenerTotal();
  
    const contenedorTotal = `
      <div class="total">
          Total: ${numeroMoneda(total)}
      </div>
      `;
  
    const contenedorCarritoCompra = document.querySelector(
      "#carrito-compra-contenedor"
    );
  
    //* asigno las clases para que no se vea el carrito */
    contenedorCarritoCompra.classList.remove("ocultar");
    contenedorCarritoCompra.classList.add("mostrar");
  
    //* hago un innerHTML para que me muestre el html de arriba */
    contenedorCarritoCompra.innerHTML =
      botonCerrar + html.join("") + contenedorTotal + botonComprar;
  
    //* Agregar un producto al carrito de compras */
    document.querySelectorAll(".agregaruno").forEach((boton) => {
      boton.addEventListener("click", (evento) => {
        const id = parseInt(boton.getAttribute("data-id"));
        carritoCompra.metodos.agregar(id, 1);
        mostrarCarrito();
      });
    });
  
    //* Remover un producto al carrito de compras */
    document.querySelectorAll(".removeruno").forEach((boton) => {
      boton.addEventListener("click", (evento) => {
        const id = parseInt(boton.getAttribute("data-id"));
        carritoCompra.metodos.remover(id, 1);
        mostrarCarrito();
      });
    });
  
    //* Remover todos las unidades de un mismo producto del carrito de compras */
    document.querySelectorAll(".removertodo").forEach((boton) => {
      boton.addEventListener("click", (evento) => {
        const id = parseInt(boton.getAttribute("data-id"));
        carritoCompra.metodos.remover(id);
        mostrarCarrito();
      });
    });
  
    //* Vaciar el carrito de compras */
    const vaciar = document.querySelector("#vaciar");
    if (vaciar) {
      vaciar.addEventListener("click", (evento) => {
        carritoCompra.metodos.vaciar();
        mostrarTienda();
        mostrarCarrito();
      });
    }
  
    //* Cerrar carrito de compras */
    document.querySelector(".cerrar").addEventListener("click", (evento) => {
      contenedorCarritoCompra.classList.remove("mostrar");
      contenedorCarritoCompra.classList.add("ocultar");
    });
  
    //* selecciono el boton comprar y le agrego un evento click para luego al pasar por el if y preguntar si el carrito tiene items y si es asi llamar al metodo comprar */
    const porComprar = document.querySelector("#comprar");
    if (porComprar) {
      porComprar.addEventListener("click", (evento) => {
        carritoCompra.metodos.comprar();
        mostrarTienda();
        mostrarCarrito();
      });
    }
  }
  //** fin mostrarCarrito **/

  function numeroMoneda(numero) {
    return new Intl.NumberFormat("es-AR", {
      maximumSignificantDigits: 2, //* 2 decimales
      style: "currency",
      currency: "ARS",
    }).format(numero);
  }

  //* MUESTRO MAPA EN LA SECCION DE CONTACTO CONSUMIENDO DATOS DE MAPS.GOOGLEAPI
  function iniciarMap(){
    let coord = {lat:-34.8121719 ,lng: -58.2769237};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}