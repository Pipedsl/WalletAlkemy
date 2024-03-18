let saldoActual = 1000; // Este valor puede provenir de una base de datos o ser calculado dinámicamente.

function actualizarSaldo() {
    document.getElementById('saldoCartera').innerText = `Saldo: $${saldoActual}`;
}



function depositar() {
    const monto = document.getElementById('deposit').value;
    if (monto) {
            saldoActual += parseFloat(monto); // Asegúrate de convertir el monto a número, ya que el valor del input es un string.
            alert(`Depósito realizado. Saldo actual: $${saldoActual}`); // Muestra un mensaje con el saldo actual.
            actualizarSaldo()
    } else {
            alert('Por favor, ingresa un monto válido.');
    }
}

document.getElementById('depositButton').addEventListener('click', depositar);

// Actualizar el saldo al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarSaldo(saldoActual);
});
