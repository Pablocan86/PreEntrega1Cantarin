//ALGORTIMO PARA CALCULAR CONSUMO CALORICO

//FORMULA APLICADA LA DE HARRIS-BENEDICT

// Mujeres  [655 + (9.6 x Peso kg) ] + [ (1.8 x Altura cm) – (4.7 x Edad)] x Factor actividad

// Hombres  [66 + (13.7 x Peso kg) ] + [ (5 x Altura cm) – (6.8 x Edad)] x Factor actividad

// Personas sedentarias (hace poca actividad física): 1.2
// Actividad ligera (hace actividad físisca 1 a 3 veces por semana): 1.375
// Actividad moderada (hace actividad físisca 3 a 5 veces por semana): 1.55
// Actividad intensa (hace actividad física 6 a 7 veces por semana): 1.725
// Actividad extremadamente alta (atletas profesionales mucha actividad física): 1.9

// 1. Divir el flujo de datos según sexo
// 2. Preguntar las otros datos necesario de la Formula de Harris-Benedict
// 3. Una vez conseguido el metabolismo basal, preguntaremos el objetivo que buscan la persona

alert("Bienvenido, hoy vamos a calcular tu consumo calórico diario")

let sexo = prompt("Escribe tu sexo (Hombre / Mujer")

if (sexo == "Hombre" || sexo == "Mujer"){
    alert("Bien! Usted es " + sexo)
   
} else if (sexo != "Hombre" || sexo != "Mujer"){
    alert("Dato ingresado erroneo, usted ingreso " + sexo);
    sexo = prompt("Escribe tu sexo (Hombre / Mujer");    
}
    let peso = parseInt(prompt("Escribe tu peso en kilogramos"))
    let altura = parseInt(prompt("Escribe tu altura en cm"));
    let edad = parseInt(prompt("Escribe tu edad"));
    let factor_actividad = parseInt(prompt("Escriba su factor de actividad: \n\n - Personas sedentarias (hace poca actividad física): 1.2\n - Actividad ligera (hace actividad físisca 1 a 3 veces por semana) = 1.375\n - Actividad moderada  (hace actividad físisca 3 a 5 veces por semana) = 1.55\n - Actividad intensa  (hace actividad física 6 a 7 veces por semana) = 1.725\n - Actividad extremadamente alta (atletas profesionales mucha actividad física) = 1.9"));
    
    // FORMULA HOMBRES
    const formula_hombres = ((66 + 13.7 * peso) + (5 * altura - 6.8 * edad)) * factor_actividad;
    
   
    // FORMULA MUJERES

    const formula_mujeres = ((655 + 9.6 * peso) + (1,8 * altura - 4,7 * edad)) * factor_actividad;
    
    

    switch (sexo){
        case "Hombre":
        alert("Su metabolismo basal es de " + formula_hombres + " calorías.");
        let objetivo = prompt("¿Cuál es su objetivo? (Escriba en número de opción):\n 1 - Quemar grasa \n 2 - Ganar músculo ");

        if (objetivo == "1"){
        let resultado = formula_hombres - 500;
        alert("Usted tiene que realizar una dieta basada en " + resultado + " calorías."); 
        }else if (objetivo == "2"){
        let resultado = formula_hombres + 500;
        alert("Usted tieneque realizar una dieta basada en " + resultado + " calorías.")}

        break;
        case "Mujer":
        alert("Su metabolismo basal es de " + formula_mujeres + " calorías.");
        let objetivo1 = prompt("¿Cuál es su objetivo?:(Escriba en número de opción):\n 1 - Quemar grasa \n 2 - Ganar músculo ");
        if(objetivo1 == "1"){
        let resultado = formula_mujeres - 500;
        alert("Usted tiene que realizar una dieta basada en " + resultado + " calorías."); 
        }else if (objetivo1 == "2"){
        let resultado = formula_mujeres + 500;
        alert("Usted tiene que realizar una dieta basada en " + resultado + " calorías.");}
        break;
        default:
        alert("El dato ingresado es erroneo");
        break;
    }

alert("Gracias por utilizar nuesrta calculadora de calorías")






