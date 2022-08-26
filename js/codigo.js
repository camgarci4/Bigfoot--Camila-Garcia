/*const categorias = [
    { nombre: 'artistas', estampas: ['Harry Styles', 'Selena Quintanilla', 'Justin Bieber', 'Alex Turner'] },
    { nombre: 'peliculas', estampas: ['El logo del Wall Street', 'El viaje de Chihiro', 'The Avengers'] },
    { nombre: 'series', estampas: ['Vis a Vis', 'Sherlock Holmes', 'The Walking Dead', 'Vikings'] },
    { nombre: 'clasicos', estampas: ['Nike', 'Jordan', 'Gatitos', 'Tradicional'] },
] */

// iu ex = UX = user experience
// iu ai = UI = user interface

const remeras = [
    { id: 1, nombre: 'Harry Styles', precio: 2000, talles: ['s', 'm', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/harry styles.png" },
    { id: 2, nombre: 'Selena Quintanilla', precio: 1900, talles: ['m', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/selena-q.png" },
    { id: 3, nombre: 'Justin Bieber', precio: 1900, talles: ['s', 'm', 'l'], color: ['Blanco', 'Negro'], imagen: "../assets/img/justin.png" },
    { id: 4, nombre: 'Alex Turner', precio: 1700, talles: ['s', 'm', 'l'], color: ['Blanco', 'Negro'], imagen: "../assets/img/alex-turner.png" },
    { id: 5, nombre: 'Paramore', precio: 1800, talles: ['s', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/paramore.png" },
    { id: 6, nombre: 'El viaje de Chihiro', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/chihiro.png" },
    { id: 7, nombre: 'Vis a vis', precio: 1700, talles: ['m', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/vis-a-vis.png" },
    { id: 8, nombre: 'Sherlock Holmes', precio: 1900, talles: ['s', 'm', 'l', 'xl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/sherlock.png" },
    { id: 9, nombre: 'The Walking Dead', precio: 1700, talles: ['s', 'm', 'l', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/twd.png" },
    { id: 10, nombre: 'Gatos Ying & Yan', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/gatitoying.png" },
    { id: 11, nombre: 'Corazón Tradicional', precio: 2000, talles: ['m', 'l', 'xl', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/corazon.png" },
    { id: 12, nombre: 'Gato #NotToday', precio: 1900, talles: ['s', 'm', 'l', 'xxl'], color: ['Blanco', 'Negro'], imagen: "../assets/img/gatito.png" },
]

let cardRemeras = document.getElementById("cardRemeras");

if (cardRemeras) {
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

        innerHTML = innerHTML + `
            <div class="col">
                <div class="card" id="remera_${remeras[i].id}">
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
                            <button id="boton" type="button" class="btn btn-secondary" onclick="agregarAlCarrito('${remeras[i].id}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    cardRemeras.innerHTML = innerHTML;
}

function agregarAlCarrito(id) {
    let talle = document.querySelectorAll("#remera_" + id + " [name=Talle]")[0].value
    let color = document.querySelectorAll("#remera_" + id + " [name=Color]")[0].value
    let remera = remeras.find(remera => {
        return remera.id == id
    })

    if (!remera) return

    let { precio } = remera

    Swal.fire(
        "Agregaste un producto al carrito: " + id,
        "Agregado correctamente",
        "success"
    );
    //console.log("Agregaste un producto al carrito " + id, talle, color, precio);

    let itemIndex = carrito.findIndex(item => {
        //operador AND
        return item.id == id 
            && item.talle == talle 
            && item.color == color
    })

    if (itemIndex >= 0) {
        carrito[itemIndex].cantidad += 1;
        carrito[itemIndex].subtotal += precio;
    } else {
        carrito.push({
            id: id,
            cantidad: 1,
            talle: talle,
            color: color,
            subtotal: precio
        })
    }
    totalCarrito += precio
    localStorage.setItem('carrito', JSON.stringify(carrito))
    localStorage.setItem('totalCarrito', totalCarrito)

document.getElementById("tabla-carrito").innerHTML+=`
    <tr>
        <td>${remeras.id}</td>
        <td>${remeras.nombre}</td>
        <td>${remeras.precio}</td>
    </tr>
`;
}

let precioRemera = 0;
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalCarrito = parseInt(localStorage.getItem('totalCarrito')) || 0;
let cantidad;

const guardarLocal = (producto, valor) => { localStorage.setItem(producto, valor) };
guardarLocal("ListaRemeras", JSON.stringify(remeras));

// Boton dark-light
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    //operador ternario
    localStorage.setItem('dark-mode', document.body.classList.contains('dark') ? 'true' : 'false')
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

function mostrarCarrito() {
    alert("Carrito!")
    mostrarMenu()
}