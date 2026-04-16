console.log("conexion con js correcta...");
/*
Concatenacion de texto con el signo + 
podemos abrir textos variables
*/
//Concatenacion: unir texto y/o variable+
const nombre = "Axel";
const apellido = "Escobar";
//Unimos ambas constantes con un texto extra.
console.log("hola, mi nombre es:" + nombre + " " + apellido)

/*
2.- Ver el tipo de fato (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);

// Template litrals (forma moderna para concatenar)
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - Contar los caracteres.
//.length --> Para contar caracteres y espacios.
let palabra="Paralelepipedo"
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.

let frase="Yo tomo chocolate caliente"
console.log(`La frase ${frase} tiene ${frase.length} caracteres.`)

//Metodos comunes en JS para formatear texto
//Transformar texto en Mayusculas
let texto1 = "JAVasCriPT es LO mejor";
console.log(texto1.toUpperCase());

//Transformar texto a minusculas .toLoverCase()
console.log(texto1.toLoverCase());

//Buscar un texto dentro de un string
let texto2 = "Leche, azucar, peras, huevos, harina";
console.log(texto2.includes("peras")); //true

//Convertir una variable a texto
let telefono = 89182920;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono: ${telefono_texto} es de tipo: ${typeof telefono_texto}`);