# __Conventional Commits__

A continuaci贸n especif铆co las convenciones para la escritura de commits en este proyecto. Si desean contribuir, procuren utilizar las siguientes convenciones. 馃憞

__NOTA:__ Las convenciones que aqui se muestran, son tomadas como base del sitio __[Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)__.

<br>

## __Estructura de Commits__

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- __```<type>:```__ Se refiere al tipo de suceso que es representado con la confirmaci贸n.

- __```<scope>:```__ Representan el m贸dulo sobre el que se esta confirmando los cambios.

- __```<description>:```__ Indica un mensaje corto sobre la acci贸n de lo que se est谩 realizando.

- __```[optional body]:```__ Cuerpo del mensaje de confirmaci贸n deber谩 dar informaci贸n de utilidad y concisa que ayude a determinar de que se trata el cambio que se esta llevando acabo.

- __```[optional footer(s)]:```__ Si existe un cambio que es muy peligroso y que puede da帽ar diversas caracter铆sticas es requerido que se coloque en el pie de la confirmaci贸n.

<br>

## __Prefijos para Commits__

- __feat:__ Se utiliza cuando se esta confirmando una nueva caracter铆stica estable, es decir que es algo que no se ha creado antes.

- __fix:__ Representa la correcci贸n de una falla (bug) dentro del proyecto.

- __docs:__ Representa cambios en la documentaci贸n del proyecto.

- __style:__ Representa cambios en el estilo (interfaz) del proyecto.

- __refactor:__ Representa modificaciones y cambios para optimizar y mejorar el dise帽o y/o arquitectura.

- __test:__ Representa cambios o creaci贸n en pruebas del proyecto (unitarias, integraci贸n, funcionales, aceptaci贸n, 鈥?)

- __chore:__ Representa cambios o creaci贸n en archivos que no afectan funcionalidades program谩ticas del sistema.