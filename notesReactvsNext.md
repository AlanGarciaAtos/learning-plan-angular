Next js vs React js

### React libreria de UI

JS to React

1 Manipular el DOM con JS plano, poderoso pero muy verboso
2 Navegador lee el DOM
3 React es una libreria declarativa

Con js requiere mas pasos para modificar el dom
Declarativo, react se va encargar del resto, si quieres hacer algo.

Ventajas React

- Facil de programar
- Componentes, se trabaja con los tags y se hace un arbol ademas que podemos reutilizar codigo
- Comunidad (muchas personas, foros,)
- Customizacion, muchos paquetes/librerias como redux e animacion

Desventajas React

- Docs viejos (se actualiza rapido react)
- Solo es libreria de frontend a comparacion de react.
- usar muchas librerias
- Usa un archivo HTML y no es muy bueno con SEO

### Next

React to next

Mejora la experiencia de usuario y al desarrollador

Desarrollador: typescript, eslint, fast refresh
Usuario: se optimiza y es muy rapida

Utiliza minification, bundling, compilation. Rust se encarga de eso

Bundling: js,tsx,css,tsx -> js, css

Ventajas Next

- Como Frontend y backend
- Tenerlo en un solo repositorio
- Basado en react, corre sobre react (si sabes react la tienes facil con next)
- Usa SSR (cargar archivos en el servidor y el usuario agarre por partes)
- Optimiza mejor las imagenes, o carga lenta o placeholders
- Amigable con SEO (usa lo que hacemos al principio html y js)

Desventajas Next

- Routing (puedes tener un manejo mas facil de carpetas y rutas)

## Nextjs vs React

- Facil de programar: ambos
- Performance: Next (SSR, optimizacion imagenes)
- Docs: Casi ambos porque next corre en react
- Comunidad: mas en react
- aprender: react, next corre sobre react
- costo: mejor react

Routing React
Componente que se llama `Routes` y tenemos un archivo de js.
Puede ser confuso porque esta todo junto, si solo quieres una ruta, o que dos rutas se van a donde mismo.

Routing Next
Con carpetas que tiene componentes .jsx.
Podemos tener rutas dinamicas solo con poner corchetes a la carpeta.

React data
Como hacer peticiones, como js con fetch, calback, async o axios-
El usuario lo puede ver porque el browser lo descarga,

Next data
Solo tiene funciones que solo corren de lado del servidor, NUNCA se va a descargar al browser del usuario.
Se usa static generation, solo se corre una vez ,los datos no mutan y no los descarga

Next Image OPtimization

- Improved performance: el servidor se encarga de optimizar y no el usuario/cliente
- Stabilidad visual
- Cargas mas rapidas: solo se cargan cuando ya las ves en el viewport
- flexibilidad de assets

# Client side rendering

Usuario haceun request al servidor y usuario obtiene el html y js de las instrucciones. Js se jecuta para hacer lo que esta programado

# Server side rendering

Html ya esta prerenderizado, menos tiempo de espera, interactuar instantaneo

# Static rendering

La pagina no tiene ninguna hidratacion, se puede renderizar al mismo tiempo de la compilcaion y el usario obtiene la pagina

# Pre rendering and hydratation

Se puede usar en react pero librerias y mas codigo
hidratacion: añadir elementos o actualizaciones y lo hace el cliente en react. Next lo hace el servidor

cuando hago una peticion al servidor, lo que pides es el html, darle funcionalidad a los elementos de ese arvhico html,css,js
Treaer las funcinoalidades, compnetnees, estilos a nuestra pagina
y rehidratar solo cambiar los elementos necesarios

estructura de islas
no solo envies el html envia el js del componente

### Performance

Next en mas rapida porque tiene SSR, paginas ya estan rerenderizadas. Optmiza las imagenes
React se renderizan por parte del cliente

### Casos de uso

react: aplicaciones multiplataforma por react native, visualization de datos, y para single page aplication
next: tiendas de eccomerce, portales de clientes, o websites de marketing(imagenes)

Como podrias proteger la info en react, una libreria, o simplemente asi?
