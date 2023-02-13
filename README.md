# 📚 Pasos para agregar contenido en bg - docs

Lo que vamos a ver acontinuacion son los pasos que tenemos que seguir para poder agregar contenido en bg - docs,;
desde donde agregar tu archivo mdx hasta que pasos seguir para que tu opcion aparezca en el menu como contenido
disponible!

## 🛠 Setup de bg-docs

Antes de comenzar tienes que realizar los pasos acontinuacion listados para poder a manejar el bg-docs:

1. Clonar el repositorio en tu pc local ejecutando:

`git clone https://github.com/balearesg/bg-docs.git`

2. Hacer las instalaciones correspondientes:



`npm i` en `cd project` y `cd ui`

## 🔥 Agregar tu contenido

Para agregar la pagina que quieras en bg-docs tu contenido debe seguir unas directrices:

1. Tiene que estar escrito en [markdown](https://dillinger.io/)
2. Tiene que estar en formato `.mdx`
3. Debe seguir los estandares de diseño de bg-docs (usar componentes existentes en caso de ser necesario)

Unas vez cumplidas estas simples pautas podemos comenzar a listar los pasos a seguir:

Los contenidos en bg-docs se posicionan en `project\modules\content\mdx` siguiendo una estructura basada en el contenido propio y dependiendo del caso esta puede ser un conjunto de archivos si el contenido se divide en partes, o si es solo una pagina un simple archivo, veamoslo con ejemplos:

### Ejemplo de implementacion con una unica pagina:

1. Nos dirigimos a la ruta donde se establecen los contenidos (`project\modules\content\mdx`)

2. creamos una carpeta con el nombre de nuestro contenido por ejemplo `getting-started`

3. dentro pondremos el contenido en formato `mdx` que querramos agregar, entonces quedaria algo asi:

-   mdx
    -   **getting-started**
        -   **el-nombre-de-tu-archivo.mdx**

## Ejemplo de implementacion con un conjunto de paginas:

1. Nos dirigimos a la ruta donde se establecen los contenidos (`project\modules\content\mdx`)

2. creamos una carpeta con el nombre de nuestro tema a tratar por ejemplo `files-naming`

3. dentro pondremos los contenido en formato `mdx` que querramos agregar, entonces quedaria algo asi:

-   mdx
    -   **files-naming**
        -   **el-nombre-de-tu-archivo.mdx**
        -   **el-nombre-de-tu-otro-archivo.mdx**
        -   **el-nombre-de-tu-otro-otro-archivo.mdx**

**Perfecto!** Ya tenemos nuestras paginas listas para ser mostradas solo quedaria disponibilizarlas para ser consumidas

### ⛏ Disponibilizacion de paginas:

Ahora viene la parte en la que hacemos que nuestra pagina forme parte de bg-docs:

1. Nos dirigimos a `project\modules\content\index.ts`.

Ahi dentro se encuentras las importaciones y exportaciones de los contenidos de bg-docs.

Lo que debemos hacer es tomar la ubicacion de nuestro/s contenido/s con respecto al archivo `index.ts`

Podremos ver que el archivo se divide en dos secciones

```
// Imports
...

// Exports
...
```

2. Vamos a irnos a la seccion imports y en el final de las importaciones (justo antes de que comience la seccion `// Exports`) vamos a agregar:

`import {default as __gettingStarted } from ./mdx/getting-started-folder/getting-started.mdx`

Donde `__gettingStarted` es el nombre de nuestro contenido (es necesario mantener los `__` al principio del nombre), el `getting-started-folder` es la carpeta que creamos antes (donde esta nuestro contenido) y `getting-started.mdx` es el nombre de nuestro archivo con formato `.mdx`

Luego de eso vamos a la seccion `// Exports` y al final de esta vamos a agregar la exportacion de nuestro/s contenido/s siguiendo las pautas anteriormente marcadas:

`export /*bundle*/ const GettingStarted = __gettingStarted;`

### Ya casi estamos! Solo quedaria disponibilizar nuestro contenido en el menu para que pueda ser accedido por otros

1. Nos dirigimos al archivo `project\project.json`
2. Lo abrimos
3. Nos vamos a la linea `16`como podemos ver nos encontraremos una propiedad `sidebarItems` que es un array que contiene los items que aparecen en el menu
4. Nos vamos a ir al final de la lista de items y crearemos el nuestro siguiendo un patron:

Los items del menu tienen una estructura definida y que puede variar segun el caso, solo hay dos casos disponibles:

-   Solo se quiere agregar una pagina solo
-   Se quiere agregar una pagina con submenues (con sub contenidos)

### Se requiere agregar solo una pagina:

En este caso el template que debemos usar es el siguiente:

```
{"label": "Nombre del menu que querramos agregar", "path": "/getting-started"}
```

### Se quiere agregar una pagina con submenues (con sub contenidos)

```
{
    "label": "Nombre del menu que querramos agregar",
    "path": "path de la pagina que queremso que aparezca cuando cliqueemos la opcion, puede ser otra pagina o una pagina introductoria",
    "children": [
        {
            label: 'Nombre de Sub pagina',
            path: "/primera-parte-del-nombre-del-export",
            "subPath": "/  segunda-parte-del-nombre-del-export"
        }
    ]
}
```

el submenu lo podemos repetir cuantas veces como sea necesario cuidando que este dentro de `children`.

### 🏅Listo! Ya tendriamos nuestro contenido en bg-docs!
