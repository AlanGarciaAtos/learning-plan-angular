# Test Driven Development

Rapidas a Lentas
End to End --- Integration --- Unit Testing

## End to End

Se simula el ecosistema.
Se prueba el ciclo completo, desde la interacción del usuario, hasta lo que pasa en los datos y lo que pasa en sistemas externos.
Verifican el flujo completo de la aplicación,de inicio a fin.
Simulan un usuario real,validan integridad de los datos,verifican interacciones con sistemas externos.

## Integration

Empezamos a juntar esas clases, componentes o paquetes, que funcione todo junto.
Verifican que los componentes desarrollados de
forma independiente,funcionen bien juntos.

<hr>

## Unitarias

Generalmente se refieren a los metodos o funciones
Verifican pequeñas partes de una aplicación,como clases,componentes o métodos.
-Se renderizaen los elementos en tu template, tenemos una lista y se requiere que aparezcan ocho listas en tu DOM.

### Caracteristicas

- Se ejecutan rapido
- Se programan rapido
- No dependen de elementos externos

Pasos de TDD (Test Driven Development)

1. Escribir prueba
2. Programar funcionalidad
3. Mejorar el el codigo

Red, Green, Refactor
**Red:** Todo esta mal en rojo, empezando
**Green:** Resolvimos los errores
**Refactor:** Mejorar el codigo que ya teniamos

Factorial
Multiplicación de los enteros positivos hasta llegar aun númeron.
5 != 5 x 4 x 3 x 2x 1 = 120
5 != 5x4!
n != n\*(n-1)!
0 != 1

Arrange, Act, Assert

**Arrange:** Inicializacion de los objetos
**Act:** Empezar a estimular o ejecutar el codigo
**Assert:** Ya se ejectuo el codigo, ver los resultados
