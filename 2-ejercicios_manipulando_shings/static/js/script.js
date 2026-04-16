console.log("Conexion correcta js");

// 💻 Desafío: Strings en JavaScript (Aplicación Integrada)
// 🎯 Objetivo
// Aplicar de forma combinada:
// Concatenación y template literals
// typeof
// .length
// Métodos (toUpperCase, toLowerCase)
// .includes()
// Conversión de datos

// 📌 Instrucciones generales
// Crear un archivo .js
// Respetar nombres y valores indicados
// Mostrar todo en consola
// Cada ejercicio debe resolverse completo (no por partes)

// 🧠 Ejercicios

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "Camila";
let edad = 25;
console.log(`Su nombre es: ${nombre} y tiene ${edad} años y el tipo de dato es: ${typeof edad}`)

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipu";
let region = "Metropolitana"
console.log(`La persona vive en la comuna ${comuna.toUpperCase()} en la region de: ${region.toUpperCase()}`)

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python"
console.log(`la palabra ${lenguaje.toUpperCase()} tiene ${lenguaje.length} letras.\nSu tipo de dato es: ${typeof lenguaje}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript"
console.log(`Frase iniciar: "${mensaje}" \nMensaje en minusculas: "${mensaje.toloverCase()}" \nBuscando palabra Javascript dentro: ${mensaje.includes("Javascript")} \nCantidad de caracteres en mensaje: ${mensaje.length}`);

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras="arroz,fideos, aceite, sal";
console.log(`Las lista de compras ${compras.toUpperCase()} tienen ${compras.length} caracteres \n. Encuentra la palabra: ${compras.length("aceite")}`);

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = "456"
let numeroCasaTexto = String(numeroCasa);
console.log(`Mi numero de casa: ${numeroCasaTexto} es de tipo ${typeof numeroCasaTexto} tiene ${numeroCasaTexto.legngth} letras`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let name = "Diego"
let lastname = "rojas";
let nombreCompleto = `${name} ${lastname}`
console.log(`El nombre es: ${name} y el apellido es: ${lastname} caracteres `.toUpperCase())

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase="Hoy aprenderemos sobre strings";
console.log(`La frase ${frase} contiene la palabra "strings": ${frase.includes("strings")}`);
console.log(`${frase.toUpperCase()} - Tiene ${frase.legngth} caracteres.`);

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto="Programar es divertido"
console.log(`Texto original ${texto} \nTexto en minuculas ${texto.toloverCase()} \nTexto en mayusculas: ${texto.toUpperCase()} \nEl texto tiene: ${texto.length} caracteres`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso="3C";
let anio="2026";
let anioTexto = String(anio); //ando texto

console.log(`Curso ${curso} del año ${anioTexto} \nAño es de tipo: ${typeof aniotexto}` .toUpperCase());

// ⭐ Desafío extra (nivel alto)
// Crea la variable:
// textoFinal: Estoy listo para el desafío
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "desafío"
// Muestre el texto en MAYÚSCULAS
// Indique el tipo de dato 


