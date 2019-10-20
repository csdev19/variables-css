// declaramos un array de temas con lo que necesitamos
var themes = [{
    'btn_color': '#F7340C',
    'btn_letter': '#fff',
},{
    'btn_color': '#F7F70C',
    'btn_letter': '#000'
},{
    'btn_color': '#0CDCF7',
    'btn_letter': '#fff'
}];
// esta variable tendra la posicion del tema actual
var actualPositionTheme = 0;
// primero vamos a hacer referencia a nuestro "root"
var root = document.querySelector(':root');
// ahora haremos referencia a los estilos de root
var rootStyles = getComputedStyle(root);
// ahora obtendremos el valor del color pink
var pink_color = rootStyles.getPropertyValue('--pink');

function changeColorTheme() {
    let theme = pickRandomTheme();
    setColorsByTheme(theme);
}

function setColorsByTheme(theme) {
    // ahora cambiaremos el valor de nuestro color
    root.style.setProperty('--background-color', theme.btn_color)
    root.style.setProperty('--letter-color', theme.btn_letter)
}


// crearemos una funcion que cree un numero aleatorio que escoja dentro de el numero de valores del array de temas
function pickRandomTheme() {
    let lengthThemes = themes.length - 1; 
    let randomPosition = randomPositonTheme(lengthThemes); 
    let randomTheme = themes[randomPosition];
    return randomTheme;
}

function randomPositonTheme(max) {
    let randPosition = randomNumber(0, max);
    if(randPosition == actualPositionTheme) {
        return randomPositonTheme(max);
    } else {
        actualPositionTheme = randPosition; 
        return randPosition;
    }
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}