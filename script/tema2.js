
let contactos = [
    { "nombre": "Andres Orozco", "telefono": 12345, "correo": "andres@mail.com" },
    { "nombre": "Luisa Orozco", "telefono": 6789, "correo": "luisa@mail.com" }
];

console.log(contactos);
function agregarAgenda() {
    //capturar lo que se ingreso en los textos
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    //asignarlo a un objeto
    let contacto = { "nombre": nombre, "telefono": telefono, "correo": correo };
    //agregar el objeto a la lista (contactos)
    contactos.push(contacto);
    //visualizar la lista
    //visualizar el primer contacto
    document.getElementById("listado").value = `${contactos[0].nombre} / ${contactos[0].telefono} / ${contactos[0].correo} `;

    //visualizar el ultimo contacto
    let ultimoIndice = contactos.length - 1;
    document.getElementById("listado").value += `\n${contactos[ultimoIndice].nombre} / ${contactos[ultimoIndice].telefono} / ${contactos[ultimoIndice].correo}`;

    llenarTabla();
}

function llenarTabla() {
    //ubicamos la tabla
    let tabla = document.getElementById("miTabla");

    //con interpolacion de cadenas podemos definir el contenido de la tabla
    let contenido = `<tr><td>${contactos[0].nombre}</td>
    <td>${contactos[0].telefono}</td>
    <td>${contactos[0].correo}</td></tr>`;
    console.log(contenido);
    tabla.innerHTML += contenido;

    /*
    //agregamos una fila
    let fila = tabla.insertRow(1); //<tr></tr>

    //agregamos celdas
    let nombre = fila.insertCell(0);  //<td></td>
    let telefono = fila.insertCell(1);
    let correo = fila.insertCell(2);

    //asignamos valor a las celdas
    nombre.innerHTML = contactos[0].nombre; //<td>nombre</td>
    telefono.innerHTML = contactos[0].telefono;
    correo.innerHTML = contactos[0].correo;
    */
}