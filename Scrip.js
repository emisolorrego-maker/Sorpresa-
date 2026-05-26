// Fecha de inicio: 2 de Octubre de 2023 (Mes 9 porque en JS los meses van de 0 a 11)
const fechaInicio = new Date(2023, 9, 2, 0, 0, 0);

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    // Cálculos matemáticos para convertir milisegundos a días, horas y minutos
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const dias = Math.floor(diferencia / milisegundosPorDia);
    
    const restoDias = diferencia % milisegundosPorDia;
    const horas = Math.floor(restoDias / (1000 * 60 * 60));
    
    const restoHoras = restoDias % (1000 * 60 * 60);
    const minutos = Math.floor(restoHoras / (1000 * 60));
    
    const restoMinutos = restoHoras % (1000 * 60);
    const segundos = Math.floor(restoMinutos / 1000);

    // Renderizar el texto en el HTML
    const contadorElemento = document.getElementById('countdown');
    contadorElemento.innerHTML = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

// Ejecutar la función inmediatamente y luego cada 1 segundo
actualizarContador();
setInterval(actualizarContador, 1000);