function obtenerDatos(){ //Obtengo los datos de la api mockeada por mi
const URL = `https://apimocha.com/todosushiproductos/productos`
fetch (URL)
.then(resultado => resultado.json())
.then (data => {
    // console.log(data)
    const productosprox = data;
    productosprox.forEach(producto => {
    document.querySelector("#tienda-contenedor").innerHTML+=`
    <div class="item">
              <div >
                  <img class="imagen" src="${producto.imagen}" alt="${producto.imagen}">
              </div>
              <div class="titulo">
                  ${producto.nombre}
              </div>
              <div class="subtitulo">
                  ${producto.descripcion}
              </div>
              <div class="precio">
                 ${producto.precio} ARS
              </div>
             
              <div class="cantidad">
                   Unidades de muestra
              </div>
  
              <div class="acciones">
                  <button class="agregar" class="btn">
                      Agregar al carrito
                  </button> <box-icon type='solid' name='lock-alt'></box-icon>
              </div>
          </div>
    `  
    });
})
}
obtenerDatos();









   
 



