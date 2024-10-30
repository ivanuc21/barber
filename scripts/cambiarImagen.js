// Array para almacenar las rutas de cada imagen recorrida del contenedor
let imagenes = [];
/*Se define una variable que representara el indice de la imagen actual
Le sumamos y asignamos el valor que recibe la funcion
que seria -1 o 1 */
let indiceImagenActual = 0
// Se recorre el contenedor con las imagenes a traves de un forEach y 
//agregamos la ruta de cada una al array de imagenes.
document.querySelectorAll('.galeria-imagenes img').forEach(function(img){
    imagenes.push(img.src);
})

function mostrarImagen(img){
    // Se captura el contenedor con el id 'modal' donde se mostraran las imagenes
    let modal = document.getElementById('modal');

    let imagenModal = document.getElementById('imagen-modal')

    // Se obtiene el indice de la imagen actual del arreglo, es decir si en la ventana doy click en la segunda imagen
    // en la variable se almacenara el valor de 1
    indiceImagenActual = imagenes.indexOf(img.src);

    // Establecemos la ruta de la imagen obtenida que se mostrara en el modal
    imagenModal.src = img.src;
    modal.style.display = 'block';
};

function cerrarModal(){
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
};

/*(n) representa el valor que se le asignara a cada boton
que retrocedera o avanzara la imagen, en el caso de retroceder 
sera -1 y avanzar 1 */
function cambiarImagen(n){
    
    indiceImagenActual += n

    if(indiceImagenActual >= imagenes.length){
        indiceImagenActual = 0;
    }
    if(indiceImagenActual < 0){
        indiceImagenActual = imagenes.length -1;
    }
    // A la imagen que se mostrara en el modal se le asigna la url de la imagen del indice actual
    document.getElementById('imagen-modal').src = imagenes[indiceImagenActual];
}