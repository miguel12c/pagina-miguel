document.getElementById("imcForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se recargue la página

    // Captura de datos
    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Cálculo de IMC
    let imc = peso / (altura * altura);
    let imcRedondeado = imc.toFixed(2);

    // Clasificación
    let clasificacion = "";
    let recomendacion = "";

    if (imc < 18.5) {
        clasificacion = "Peso bajo";
        recomendacion = `${nombre}, deberías consultar con un nutricionista para subir de peso de forma saludable.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Peso normal";
        recomendacion = `${nombre}, ¡estás en un rango saludable! Mantén una dieta equilibrada y ejercicio regular.`;
    } else {
        clasificacion = "Sobrepeso";
        recomendacion = `${nombre}, considera una alimentación balanceada y actividad física para mejorar tu salud.`;
    }

    // Mostrar resultados
    document.getElementById("resultado").textContent = `Tu IMC es: ${imcRedondeado} (${clasificacion})`;
    document.getElementById("recomendacion").textContent = recomendacion;
});