
//Ejercicio 1: Mostrar saludo personalizado
//Crear una función que guarde en una variable de tipo texto el nombre de una persona y luego muestre un mensaje de bienvenida.
//Sugerencia: usar una variable tipo string y concatenar el texto.



//Ejercicio 2: Mostrar la suma de dos números
//Crear una función que almacene dos números enteros en variables distintas, realice la suma y muestre el resultado.
//Sugerencia: utilizar el operador matemático +.



//Ejercicio 3: Calcular la resta entre dos valores
//Crear una función que almacene dos números, realice la resta entre ellos y muestre el resultado.
//Sugerencia: utilizar el operador -.



//Ejercicio 4: Calcular el producto de dos números
//Crear una función que multiplique dos números guardados en variables y muestre el resultado.
//Sugerencia: utilizar el operador *.



//Ejercicio 5: Calcular el promedio simple
//Crear una función que almacene tres notas, calcule el promedio y muestre el resultado.
//Sugerencia: sumar las tres notas y dividir por 3.



//Ejercicio 6: Verificar si una persona es mayor de edad
//Crear una función que almacene una edad y determine si la persona es mayor o menor de edad.
//Sugerencia: usar una estructura condicional if - else.



//Ejercicio 7: Verificar si un número es par o impar
//Crear una función que almacene un número y determine si es par o impar.
//Sugerencia: utilizar el operador módulo %.



//Ejercicio 8: Determinar si un estudiante aprueba
//Crear una función que almacene una nota final y determine si el estudiante está aprobado o reprobado.
//Sugerencia: considerar que la nota mínima de aprobación es 4.0.



//Ejercicio 9: Aplicar descuento a una compra
//Crear una función que almacene el precio de un producto, aplique un descuento del 10% y muestre el valor final.
//Sugerencia: calcular primero el descuento y luego restarlo al precio original.



//Ejercicio 10: Comparar dos números y mostrar el mayor
//Crear una función que compare dos números y muestre cuál de ellos es mayor.
//Sugerencia: utilizar una estructura if - else.



//Ejercicio 11: Clasificación completa de una nota
//Crear una función que almacene el nombre de un estudiante y su nota final. Luego debe clasificar su rendimiento según las siguientes condiciones:
//Si la nota es 6.0 o superior → Excelente rendimiento
//Si la nota es 4.0 o superior → Estudiante aprobado
//Si la nota es menor a 4.0 → Estudiante reprobado
//El resultado debe mostrarse indicando el nombre del estudiante y su situación académica.
//Sugerencia: usar if, else if, else y template strings con `.

function ejercicio1(){
    let nota = 6.5;
    if (nota >= 6.0) {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: ¡Excelente Rendimient!`);} else if (nota >= 4.0);
}

//Ejercicio 12: Nombre en mayúsculas y cantidad de letras
//Crear una función que almacene un nombre completo, lo convierta a mayúsculas y además muestre la cantidad de caracteres que contiene.
//El resultado debe mostrar ambas informaciones en una sola alerta.
//Sugerencia: utilizar .toUpperCase() y .length.

function ejercicio12(){
    let nombre="Axel";
    let apellido="Escobar";
    let nombrecom = nombre + " " + apellido;
    alert(`El nombre convertido es: ${nombre.toUpperCase()} ${apellido.toUpperCase()} \ntiene ${nombrecom.length} caracteres`);
}

//Ejercicio 13: Correo en minúsculas y validación básica
//Crear una función que almacene un correo electrónico en texto, lo convierta a minúsculas y luego indique si su largo es adecuado:
//Más de 15 caracteres → correo válido
//15 o menos caracteres → correo demasiado corto
//Mostrar el correo transformado junto con el resultado de la validación.
//Sugerencia: combinar .toLowerCase(), .length y condicionales.



//Ejercicio 14: Clasificación de una frase según su tamaño
//Crear una función que almacene una frase y determine si es:
//Frase larga → más de 20 caracteres
//Frase mediana → entre 11 y 20 caracteres
//Frase corta → 10 o menos caracteres
//Además, debe mostrar la frase original y la cantidad total de caracteres.
//Sugerencia: utilizar .length con if, else if y else.



//Ejercicio 15: Producto con descuento y descripción en mayúsculas
//Crear una función que almacene el nombre de un producto y su precio. Luego debe aplicar descuento según las siguientes condiciones:
//Si el precio es mayor o igual a $50.000 → 20% de descuento
//Si el precio es mayor o igual a $20.000 → 10% de descuento
//Si es menor a $20.000 → sin descuento
//El nombre del producto debe mostrarse en mayúsculas junto al precio final.
//Sugerencia: combinar operaciones matemáticas, .toUpperCase() y condicionales.



//Ejercicio 16: Boleta de compra con clasificación de cliente
//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)



//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente



//Ejercicio 18: Evaluación de tres notas con estado final
//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:
//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado

function calcularNota(){
    let nombre = "Papelucho";
    let n1 = 2.9;
    let n2 = 7.8;
}

//Ejercicio 19: Clasificación de desempeño con más niveles
//Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:
//Convertir el nombre a mayúsculas
//Clasificar el rendimiento según:
//≥ 6.5 → Sobresaliente
//≥ 6.0 → Muy buen rendimiento
//≥ 5.0 → Buen rendimiento
//≥ 4.0 → Suficiente
//< 4.0 → Insuficiente

function calificacionDesempeño(){
    let nombre = "Axel"
    let 
}

//Ejercicio 20: Clasificación de producto con múltiples rangos de precio
//Crear una función que almacene el nombre de un producto y su precio. Luego:
//Convertir el producto a minúsculas
//Clasificar el precio:
//≥ 200.000 → Producto de lujo
//≥ 100.000 → Producto premium
//≥ 50.000 → Producto estándar
//≥ 20.000 → Producto económico
//< 20.000 → Producto básico

//Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
//Crear una función que almacene una frase y un puntaje. Luego:
//Convertir la frase a mayúsculas
//Contar su largo
//Clasificar el puntaje:
//≥ 90 → Excelente
//≥ 80 → Muy bueno
//≥ 70 → Bueno
//≥ 60 → Regular
//< 60 → Deficiente
