// Función que solicita datos personales y calcula el crédito
function solicitarCredito() {
    
    for (;;) { 
        // Solicitar datos personales
        let nombre = prompt('Por favor, introduce tu nombre:');
        let apellido = prompt('Por favor, introduce tu apellido:');
        let edad = prompt('Por favor, introduce tu edad:');
        let sueldoBrutoPromedio = parseFloat(prompt('Por favor, introduce tu sueldo bruto promedio:'));

        // Definir importe máximo del crédito
        let importeMaximo;

        if (sueldoBrutoPromedio < 350000) {
            importeMaximo = 1000000;
        } else {
            importeMaximo = 2000000;
        }

        // Verificar si la edad es mayor de 18 años
        if (edad !== null && !isNaN(edad) && parseInt(edad) >= 18) {
            // Calcular tasa de interés anual (150%)
            let tasaAnual = 1.5;

            // Solicitar plazo del préstamo
            let plazo = parseInt(prompt('Selecciona el plazo del préstamo (24, 36 o 48 meses):'));

            // Verificar el plazo ingresado
            if (plazo === 24 || plazo === 36 || plazo === 48) {
                
                let tasaMensual = tasaAnual / 12;
                let cuotaMensual = (importeMaximo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
                let total = cuotaMensual * plazo;

              
                let mensaje = '¡Hola, ' + nombre + ' ' + apellido + '! Tu solicitud de crédito ha sido aprobada.\n';
                mensaje += 'Monto máximo que puedes solicitar: $' + importeMaximo.toFixed(2) + '\n';
                mensaje += 'Plazo del préstamo: ' + plazo + ' meses\n';
                mensaje += 'Cuota mensual: $' + cuotaMensual.toFixed(2) + '\n';
                mensaje += 'Total a pagar: $' + total.toFixed(2);

                alert(mensaje);

                let respuesta = prompt('¿Deseas solicitar otro crédito? (Sí/No)').toLowerCase();
                if (respuesta !== 'si') {
                    alert("Gracias por su consulta!,vuelva pronto")
                    break; // Salir del ciclo si la respuesta no es 'si'
                }

            } else {
                alert('El plazo seleccionado no es válido.');
            }
        } else {
            alert('Debes ser mayor de 18 años para solicitar un crédito personal.');
        }
    }
}
