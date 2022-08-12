/*const categorias = [
    { nombre: 'artistas', estampas: ['Harry Styles', 'Selena Quintanilla', 'Justin Bieber', 'Alex Turner'] },
    { nombre: 'peliculas', estampas: ['El logo del Wall Street', 'El viaje de Chihiro', 'The Avengers'] },
    { nombre: 'series', estampas: ['Vis a Vis', 'Sherlock Holmes', 'The Walking Dead', 'Vikings'] },
    { nombre: 'clasicos', estampas: ['Nike', 'Jordan', 'Gatitos', 'Tradicional'] },
] */

const remeras = [
    { nombre: 'Harry Styles', precio: 2000, talles: ['s', 'm', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/harry styles.png" },
    { nombre: 'Selena Quintanilla', precio: 1900, talles: ['m', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/selena-q.png" },
    { nombre: 'Justin Bieber', precio: 1900, talles: ['s', 'm', 'l'], color: ['Blanco', 'Negro'], imagen:"../assets/img/justin.png" },
    { nombre: 'Alex Turner', precio: 1700, talles: ['s', 'm', 'l'], color: ['Blanco', 'Negro'], imagen:"../assets/img/alex-turner.png" },
    { nombre: 'Paramore', precio: 1800, talles: ['s', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/paramore.png" },
    { nombre: 'El viaje de Chihiro', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/chihiro.png" },
    { nombre: 'Vis a vis', precio: 1700, talles: ['m', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/vis-a-vis.png" },
    { nombre: 'Sherlock Holmes', precio: 1900, talles: ['s', 'm', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/sherlock.png" },
    { nombre: 'The Walking Dead', precio: 1700, talles: ['s', 'm', 'l', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/twd.png" },
    { nombre: 'Gatos Ying & Yan', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/gatitoying.png" },
    { nombre: 'Corazón Tradicional', precio: 2000, talles: ['m', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/corazon.png" },
    { nombre: 'Gato #NotToday', precio: 1900, talles: ['s', 'm', 'l', 'xxl'], color: ['Blanco', 'Negro'], imagen:"../assets/img/gatito.png" },
]

let cardRemeras = document.getElementById("cardRemeras");
let innerHTML = '';

for (let i = 0; i < remeras.length; i++) {
    let tallesHtml = ''
    let colorHtml = ''

    for (let t = 0; t < remeras[i].talles.length; t++) {
        tallesHtml = tallesHtml + `<option value="${remeras[i].talles[t].toUpperCase()}">
                ${remeras[i].talles[t].toUpperCase()}
            </option>`;
    }

    for (let c = 0; c < remeras[i].color.length; c++) {
        colorHtml = colorHtml + `<option value="${remeras[i].color[c]}">
                ${remeras[i].color[c]}
            </option>`;
    }

    innerHTML= innerHTML + `
        <div class="col">
            <div class="card">
                <img src="${remeras[i].imagen}" class="card-img-top" alt="Remera de ${remeras[i].nombre}">
                <div class="card-body">
                    <h3 class="card-title">${remeras[i].nombre}</h3>
                    <h5>$${remeras[i].precio}</h5>
                    <div class="selector">
                        <legend class="subnombre">Talle</legend>
                        <select class="form-select" name="Talle">${tallesHtml}</select>
                        <legend class="subnombre">Color</legend>
                        <select class="form-select" name="Color">${colorHtml}</select>
                    </div>
                    <div class="button">
                        <button id="boton" type="button" class="btn btn-secondary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
cardRemeras.innerHTML = innerHTML;

let boton=document.getElementById("boton");
boton.onclick = () => {
    console.log("Agregaste un producto al carrito");
    carrito.push(remeras);
}


let precioRemera = 0;
let carrito = [];
let totalCarrito = 0;
let cantidad;

/*function mostrarMenu() {
    let input = prompt("Elegí una categoría:\n Artistas\n Peliculas\n Series\n Clasicos\n-'Carrito' para ver el carrito.");

    if (!input) {
        mostrarMenu()
        return
    }

    if (input.toLowerCase() === 'carrito') {
        mostrarCarrito()
    }

    let categoria = categorias.find((categoria) => {
        return categoria.nombre.toLowerCase() == input.toLowerCase()
    })

    if (!categoria) {
        alert("Categoría inválida")
        mostrarMenu()
        return
    }

    let estampas = categoria.estampas

    remerasFiltradas = remeras.filter((remera) => {
        return estampas.includes(remera.nombre)
    })

    let infoRemeras = remerasFiltradas.map(remera => {
        return remera.nombre + " $" + remera.precio
    })

    let listaEstampas = infoRemeras.join("\n");

    let hayRemeras = false;
    let disenio;

    while (!hayRemeras) {
        disenio = prompt("Diseños disponibles:\n" + listaEstampas);

        hayRemeras = consultarStock(disenio);

        if (!hayRemeras) {
            alert("Actualmente no tenemos stock de " + disenio);
        }
    }


    cantidad = prompt("Gracias por elegir nuestra remera de " + disenio + ". Ingrese la cantidad deseada por el precio de $" + precioRemera + " cada una:");

    mostrarMenu();
} */

// VEMOS QUE PASA
function calcularCarrito() {
    let itemIndex = carrito.findIndex(item => {
    return item.estampa.toLowerCase() == disenio.toLowerCase()
})

if (itemIndex >= 0) {
    carrito[itemIndex].cantidad += parseInt(cantidad);
    carrito[itemIndex].subtotal += cantidad * precioRemera;
} else {
    carrito.push({
        estampa: disenio,
        cantidad: parseInt(cantidad),
        subtotal: cantidad * precioRemera
    })
}

totalCarrito += (cantidad * precioRemera)
console.log(carrito);
console.log(totalCarrito);

alert("Se agregó " + disenio + " al carrito. El total hasta el momento es $" + totalCarrito);
}


function mostrarCarrito() {
    alert("Carrito!")
    mostrarMenu()
}
/* TEMPORAL
function filtrarRemeras(estampas) {
    let remerasFiltradas = [];

    for (let i = 0; i < remeras.length; i++) {
        if (estampas.indexOf(remeras[i].nombre) >= 0) {
            remerasFiltradas.push(remeras[i]);
        }
    }

    return remerasFiltradas;
}

function encontrarCategoria(categoria) {
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].nombre == categoria) return categorias[i];
    }
    return;
}

function consultarStock(disenio) {
    infoRemera = remeras.find(remera => {
        return remera.nombre.toLowerCase() == disenio.toLowerCase();
    });

    if (!infoRemera) return false;

    precioRemera = infoRemera.precio;
    return true;
} */
