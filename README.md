## Instalación
**Requirimientos previos** -> **node.js**
</br>
Descargar y agregar la carpeta [public](https://drive.google.com/drive/folders/18ambIQ-h1KyS6eTXYkrEvralO3_KkhLY?usp=sharing) en ``\fronted\reto_final``. (No esta en el repositorio por la capacidad que ofrece de github)
</br> 
1. Instalar dependencias:
 ```npm
 /fronted/reto_final/ npm install
 ```
2. Instalar Vite:
 ```npm
 /fronted/reto_final/ npm install vite
 ```
3. Run:
 ```npm
 /fronted/reto_final/ npm run dev
 ```

## VISTAS:
Vistas donde se importan los componentes y su logica si es necesaria:
``\fronted\reto_final\src\views``
## COMPONENTES:
Los comoponentes con su logica propia:
``\fronted\reto_final\src\components``
## ROUTER:
Enrutamiento de las vistas:
``\fronted\reto_final\src\router\router.js``
## AXIOS
Donde se guarda como constante global pa API URL
``\fronted\reto_final\src\axios.js`` 
## STORAGE
El lugar que usamos para manejar el **local storage** pasar los juegos de un componente a otro, y guardar el token del usuario:
``\fronted\reto_final\src\storage.js``
