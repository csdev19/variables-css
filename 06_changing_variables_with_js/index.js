console.log('hola')

// primero vamos a hacer referencia a nuestro "root"
var root = document.querySelector(':root');

// ahora haremos referencia a los estilos de root
var rootStyles = getComputedStyle(root);

// ahora obtendremos el valor del color pink
var pink_color = rootStyles.getPropertyValue('--pink');
console.log("TCL: pink-color", pink_color)

// ahora cambiaremos el valor de nuestro color
root.style.setProperty('--pink', '#F7F00C')