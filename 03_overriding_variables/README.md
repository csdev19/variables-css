# Sobreescribiendo variables

En el capitulo anterior vimos como crear variables css. Y ahora vamos a ver el scope de estas variables.

Las variables CSS funcionan en todos los hijos de los elementos en donde declaramos las variables (En este caso lo declaramos en el root).

Pero van a existir ocasiones en donde vamos a querer sobreescribir estas variables. Y veremos como podriamos hacer.

```html
<html>
    <head>
    </head>
    <body>
        <header>
        </header>
        <main>
        </main>
        <footer>
        </footer>
    </body>
</html>
```