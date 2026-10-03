function generarTablas() {
    let valorCaja = document.getElementById("numero-tabla").value;
    let contenedor = document.getElementById("contenedor");
    let contenido = "";

    contenido += `
        <section id="tabla" class="tarjeta">
            <h1>Tabla del ${valorCaja}</h1>

            <div class="tabla-div">
                <div class="fila encabezado">
                    <div class="celda">Operación</div>
                    <div class="celda">Resultado</div>
                </div>

                <div class="tabla">
    `;

    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila">${valorCaja} × ${i} = ${valorCaja * i}</div>`;
    }

    contenido += `
                </div>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
}