# AMS-WIDGETAPP
mini-aplicación para comprar dispositivos moviles.

Dicha aplicación contiene únicamente tres vistas: 
1.	Vista principal – Home 
2.	Listado de productos
3.	Detalles del producto. 

Detalles de las vistas:

•	En el home nos conseguimos con un header que está conformado por,

-	Un icono de la aplicación, actúa como enlace a la vista principal.
-	Un menuBurger que por los momentos actúa como enlace a la vista de listado del producto.
-	Un breadcrumbs, mostrando la página donde se encuentra el usuario, así como un link para su navegación.
-	Un carrito de compras, el cual muestra el número de items que se hayan añadido al carrito.

•	En la vista listado de productos, nos conseguimos un buscador y el listado de todos los productos disponible con un scroll infinito, conformado por,

-	Para el buscador: 
Se muestra un input, el cual permite la introducción de una cadena de texto. Se puede filtrar los productos en función del texto introducido, comparando con la Marca y el Modelo de los productos, todo esto en tiempo real. 

-	Para la lista de productos:
Muestra en una card  la Imagen, Marca, Modelo y Precio del producto, Si se selecciona un producto nos redirecciona a la vista de detalle de producto. 

•	En la vista de detalle de producto,

nos conseguimos con un modal divido en 3 partes, imagen del producto, detalles del producto y las acciones del producto.
-En las acciones, tenemos dos tipos de selectores, almacenamiento y colores, los cuales se pueden añadir a la cesta del carrito de compras. Aunque solo exista una opción, se muestra el selector con la información seleccionada por defecto marcado en rojo.
 Se visualiza un botón de Añadir, una vez seleccionada las opciones, se añadirá el producto a la cesta. 
Este valor de productos añadidos se muestra en la cabecera de la aplicación en cualquier vista, (icono carrito de compras.) 
- Se visualiza un botón de volver, actúa como enlace a la vista lista de productos.

Dicha aplicación posee una capa de persistencia de datos:

Posee un almacenaje de los datos que se reciban desde el API. ofrece un sistema de cacheo, para que no se realicen múltiples peticiones al API. Se almacena la información cada vez que se solicite el servicio del API , guarda dicha información, y tendrá una expiración de 1 hora, una vez excedido dicho tiempo,  revalida la información,  Se utiliza cualquier método de storage para almacenar dicha información, ya sea del navegador o en memoria, pero siempre en cliente.



DEPLOY EN GITHUB PAGES: 
https://monagasvegas.github.io/AMS-WIDGETAPP/
