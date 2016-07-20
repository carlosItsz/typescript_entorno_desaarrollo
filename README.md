Entorno de desarrollo para trabajar con typescript
==================================================

Entorno de desarrollo con servidor web para realizar practicas con TypeScript.

# Entorno de desarrollo

En este repositorio encontraras un entorno de desarrollo para trabajar con Typescript, destacamos lo siguiente.-

* Servidor web con live reload.
* Compilador typescript.
* Generador de archivos d.ts.
* Generador de archivos .js (y un archivo concatenado y minificado).

Solo te encargaras de crear código, nosotros nos encargamos del resto...

## Como empezar

1.- Descarga o clona este repositorio en tu ordenador.

```js
$ git clone https://github.com/nemesis866/typescript_entorno_desaarrollo.git nombre_proyecto
$ cd nombre_proyecto
```

Nota.- Cambia nombre_proyecto por el nombre que le quieras dar al directorio donde se clonara el repositorio.

2.- Instala las dependencias del proyecto con una sola instrucción.-

```js
$ npm install
```

## Modo developer

En este modo podrás empezar a desarrollar código Typescript, tendrá las siguientes opciones.-

* Los archivos .ts los tienes que crear dentro del directorio app/ts.
* Los archivos generados d.ts y .js se almacenaran en el directorio app/release/ts.
* El archivo .js concatenado y minificado se almacenara en el directorio app/build.
* El repositorio cuenta con el archivo demo.ts con un ejemplo de código Typescript (obtenido de la web oficial).

Para activar el modo developer ejecute el siguiente comando.-

```js
$ npm run dev
```

Ya puede acceder al servidor desde (no olvides activar la consola javascript del navegador).-

http://127.0.0.1:3000