window.onload = function() {
    const lista = document.getElementById("Lista").getElementsByTagName("li");
    for (let i = 0; i < lista.length; i++) {
        lista[i].innerText = `Punto cambiado ${i + 1}`;
    }
};