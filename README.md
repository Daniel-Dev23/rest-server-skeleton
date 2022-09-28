# __REST Server Skeleton__

<img src="banner-nodejs.jpg" width="600">

<br>

Este repositorio contiene un proyecto REST Server apta para proyectos API.

## __Acerca De__

Se trata de un proyecto apto para trabajar con API (Application Programming Interface). Dicha base esta construida en __Node JS__ en conjunto de __Express__, el framework backend más popular de Node JS.

Este REST Server, no está orientado hacia una configuración especial hacia un módelo de base de datos. 

Es completamente __agnóstico__, esto quiere decir, que eres libre de usar esta base y modificarla según tus necesidades.

__[Ver Imágenes de Proyecto](./thumbnails.md)__

Además de utilizar __Express__, algunas dependencias que complementan a este proyecto son:

- __dotenv:__ Dependencia para configurar variables de entorno.
- __uuid:__ Dependencia para generar id automáticos.
- __cors:__ Dependencia para configurar la seguridad en los llamados a nuestras APIs.
- __morgan:__ Middleware que registra las REQUEST junto con otra información dependiendo de su configuración y el valor predeterminado utilizado. Demuestra ser muy útil durante la depuración.
- __helmet:__ Dependencia para agregar algunos HEADERS con el fin de incrementar la seguridad en nuestras APIs.
- __express-validator:__ Herramienta que permite implementar validaciones.

<br>

## __Detalles de Prueba__

Dado que este REST Server no esta orientado hacia alguna base de datos, de alguna forma debemos comprender como es que funciona.

Para esto, el REST Server simulará una base de datos por medio de un archivo json. Con esto podremos tener nuestra información de prueba persistente.

La temática será un __CRUD de Tenologías__, donde manejaremos los siguientes datos:

```js
{
    "id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
    "technologyName": "Node JS",
    "category": "Language Programming",
    "description": "Language Programming JavaScript",
    "documentationLink": "https://nodejs.com/docs",
    "createAt": "14/08/2022, 08:30:34 AM",
    "updateAt": "14/08/2022, 08:30:34 AM"
}
```

Con esto vamos a interactuar para comprender el funcionamiento de esté REST Server.

Si esta base te es de utilidad, puedes eliminar el archivo json de prueba, así como los scripts de JS, como controladores, routers, etc y en su lugar colocar los archivos y configuraciones que desees.

<br>

## __Guía de instalación__

1. Clona el siguiente repositorio: 

    ```
    https://github.com/Daniel-Dev23/rest-server-base.git
    ```

2. Instala los módulos de Node JS, con el siguiente comando:

    ```
    npm install
    ```

3. Para iniciar __rest-server-base__, ejecute el siguiente comando en consola.

    ```
    npm run dev
    ```

    Esto iniciará el servidor con __Nodemon__ en modo de desarrollo para comenzar a realizar las peticiones.

    Por defecto, el puerto del server se iniciará en el __"8081"__, pero si este puerto no esta disponible
    entonces se iniciará en el puerto __"3000"__ (El puerto lo puedes configurar según desees en el archivo __.env__).

    Si todo se ha ejecutado correctamente, al ingresar a la URL del Server, nos mostrará algo como esto:
    ```json
    {
        "status": true,
        "message": "Hello World! Welcome to REST Server API :D"
    }
    ```

<br>

__NOTA:__ Se recomienda utilizar un cliente para realizar peticiones REST como __Postman__, __Insomnia__, __Thunder Client__ etc.

<br>

## __Documentación__

Proximamente...

---

## __Medios de Contacto__

__¡Será un gusto para mi conocerte!__ 😊✌

<br>

<a href="mailto:danieldev.info@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/daniel-gonzalez-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
<a href="https://github.com/Daniel-Dev23">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</a>
