window.onload = function() {
    const datos = [
        ["Galo", "Andrade", 21],
        ["Luis", "Toapanta", 20],
        ["Daniela", "Guaranda", 19]
    ];

    const filas = document.getElementById("Tabla").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    
    for (let i = 0; i < datos.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        for (let j = 0; j < datos[i].length; j++) {
            celdas[j].innerText = datos[i][j];
        }
    }
};