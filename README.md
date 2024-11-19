# indroduccion-testing
un primer paso de testar codigo con unit test, integration test end to end

aqui solo veremos las bases del testing
claro el testing puede implementarse en las diferentes fases del desarrollo de un producto o servicio que son:
- Requerimientos
- Diseño / Arquitectura
- Desarrollo
- Test o QA
- Produccion

## Herramientas
en este repaso del testing las herramientas que vamos a utilizar es **Jest** que tiene una estructura agnostica a la hora de escribir pruebas, en ñas pruebas estaticas utilizaresmos **Eslint** y para hacer las pruebas 
**End to End** vamos a utilizar un "fraude" de una base de datos y aparte crearemos un base de datos de prueba para las pruebas de UI

entre mas temprano encontremos un error y los solucionemos mas facil y baratos sera implementarlo en el proyecto en fase de requerimientos es mas sencillo solucionar un error y entre mas avanzamos se complica un poco mas

en los test vamos a tener un **SUT** que seria *System Under Test* que en tes caso de pruebas unitarias seria mas *Subject Under Test*. Tambien es bueno que tengamos en cuenta los conceptos de validar y verificar

En validar contestamos la pregunta si estamos construyendo en sistema correcto que todo lo que se esta haciendo produce un valor esto esta muy asociado con la capa del negocio y los requerimientos

El verificar va con la pregunta estamos construyendo en sistema correctamente vamos a validar que el sistema funciones de manera eficiente ya obviando que agrega valor a nuestros usuarios finales

Con todo esto podemos ver que los test no necesariamente se hacen con codigo podemos hacer pruebas en la fase de requerimiento donde un requerimento seria nuestro Subject Under Test y la ejecucion de la prueba seria manual donde estrevistariamos a nuestro cliente para validar que ese requerimiento sea el que el o ella necesita, claro que dependiendo con la metodologia que trabajes puedes tener Stakeholders todo esto es una idea basica para poder implementar pruebas

Claro que aqui nos enfocaremos en pruebas de desarrollo que puede contener:
- Unit test
- Integration test
- End to end
- UI test
la mayor parte de estas prubas se ejecutan automaticamente puedes hacerlo de forma manual, si, pero se prefiere automatizar para costes de tiempo

## Pruebas estaticas
estas pruebas se caracterizan porque se ejecutan justo cuando estamos escribiendo codigo harremientas como *eslint* son utilizadas para esto. Generalmente utilizadas para una organizacion en la sintaxis a la hora de escribir codigo o pruebas eslint no es la unica existe otras como *sonarqube*, *codacy*, *code climate* que son un poco mas complejas

Por cierto quien escribe las prebas, pues en la Unit test las escribe el desarrollador que esta escribiendo el codigo sea de frontend o backend lo minimo es que quien escribe el codigo escribe las pruebas, en otras prubas como End to end o UI pueden tener un equipo de QA

## Pruebas no funcionales
que genralmente se enfocan en temas de rendimiento, de carga o estabilidad, pruebas de estres, seguridad que estan mas relacionadas con otros aspectos de nuestro sistema

Lo normal es que estas pruebas sobre al principio que iniciemos un proyecto imagina que has creado Twitter o X como le quieras llamar las primeras salidas a produccion lo mas probable es que se haga en una base de datos comun como MYSQL y a medida que vayan incrementando los usuarios podemos hacer pruebas de escalabilidad para mirar si tenemos que cambiar de nuestro entorno de base de datos

## Unit Test
Son las más comunes y se enfocan en probar unidades específicas, incluso conectando dependencias como BD o librerías emuladas (Dummies); se les conoce también como pruebas de estado o de caja negra, ya que solo importan las entradas y las salidas, en algunas ocasiones se hace con dependencias reales.

Una unidad puede ser una función o un método o una clase, depende del paradigma usado en desarrollo (funcional o POO); una unidad debe tener solo una responsabilidad en específico.

Una utilidad importante de las Unit Test es el Cover Report (reporte de cobertura), ya que se puede hacer pruebas unitarias de dos formas

### Caja negra
este metodo de hacer pruebas se centra en los datos de entradas y los datos de salida, el proceso que ocurra para obtener un resultado no nos interesa imagina una function que sume dos numeros, tu ya sabes que la function va a sumar lo importante que que me traiga los numeros esperados de la suma

### Caja blanca
este metodo se centra mas en el comportamiento claro que queremos que nos devuelva el resultado esperado (output) pero tembien queremos ver como se comporta una dependencia, framework, libreria o que aya corrido un Query de una base de datos si es lo que queremos testear
