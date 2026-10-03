function generarTablas() {
    let contenedor = document.getElementById("contenedor");
    let contenido = "";

    contenido += `
        <section id="tabla" class="tarjeta">
<<<<<<< HEAD
            <h1>Tabla del 3</h1>
=======
            <h1>Tabla del 5</h1>
>>>>>>> 2bcf278 (Generar tabla del 5)

            <div class="tabla-div">
                <div class="fila encabezado">
                    <div class="celda">Operación</div>
                    <div class="celda">Resultado</div>
                </div>

                <div class="tabla">
    `;

    for (let i = 1; i <= 10; i++) {
<<<<<<< HEAD
        contenido += `<div class="fila">3 × ${i} = ${3 * i}</div>`;
=======
        contenido += `<div class="fila">5 × ${i} = ${5 * i}</div>`;
>>>>>>> 2bcf278 (Generar tabla del 5)
    }

    contenido += `
                </div>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
<<<<<<< HEAD
}
=======
}
>>>>>>> 2bcf278 (Generar tabla del 5)
