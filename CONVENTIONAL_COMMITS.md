# __Conventional Commits__

A continuación especifíco las convenciones para la escritura de commits en este proyecto. Si desean contribuir, procuren utilizar las siguientes convenciones. 👇

__NOTA:__ Las convenciones que aqui se muestran, son tomadas como base del sitio __[Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)__.

<br>

## __Estructura de Commits__

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- __```<type>:```__ Se refiere al tipo de suceso que es representado con la confirmación.

- __```<scope>:```__ Representan el módulo sobre el que se esta confirmando los cambios.

- __```<description>:```__ Indica un mensaje corto sobre la acción de lo que se está realizando.

- __```[optional body]:```__ Cuerpo del mensaje de confirmación deberá dar información de utilidad y concisa que ayude a determinar de que se trata el cambio que se esta llevando acabo.

- __```[optional footer(s)]:```__ Si existe un cambio que es muy peligroso y que puede dañar diversas características es requerido que se coloque en el pie de la confirmación.

<br>

## __Prefijos para Commits__

- __feat:__ Se utiliza cuando se esta confirmando una nueva característica estable, es decir que es algo que no se ha creado antes.

- __fix:__ Representa la corrección de una falla (bug) dentro del proyecto.

- __docs:__ Representa cambios en la documentación del proyecto.

- __style:__ Representa cambios en el estilo (interfaz) del proyecto.

- __refactor:__ Representa modificaciones y cambios para optimizar y mejorar el diseño y/o arquitectura.

- __test:__ Representa cambios o creación en pruebas del proyecto (unitarias, integración, funcionales, aceptación, …)

- __chore:__ Representa cambios o creación en archivos que no afectan funcionalidades programáticas del sistema.