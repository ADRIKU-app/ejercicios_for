function generarTablas() {
    const cajaNumero = document.getElementById("numero-tabla");
    const resultadoTabla = document.getElementById("resultado-tabla");
    const mensaje = document.getElementById("mensaje");

    const valorCaja = cajaNumero.value.trim();
    const numero = Number(valorCaja);

    if (valorCaja === "") {
        mensaje.textContent = "Escribe un número antes de presionar PROBAR.";
        cajaNumero.focus();
        return;
    }

    if (Number.isNaN(numero)) {
        mensaje.textContent = "Ingresa solamente números, por ejemplo 3, 5 u 8.";
        cajaNumero.focus();
        return;
    }

    let contenido = `
        <section id="tabla" class="tarjeta">
            <h2>Tabla del ${numero}</h2>

            <div class="tabla-div">
                <div class="fila encabezado">
                    <div class="celda">Operación</div>
                    <div class="celda">Resultado</div>
                </div>

                <div class="tabla">
    `;

    for (let i = 1; i <= 10; i++) {
        contenido += `
            <div class="fila">
                ${numero} × ${i} = ${numero * i}
            </div>
        `;
    }

    contenido += `
                </div>
            </div>
        </section>
    `;

    resultadoTabla.innerHTML = contenido;
    mensaje.textContent = `¡Listo! Estás practicando la tabla del ${numero}.`;
}
