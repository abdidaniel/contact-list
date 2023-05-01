let contactos = ["Juan Castro", "Maria Rodriguez", "Luis Garcís"];

function agregarContacto(nombre) {
    contactos.push(nombre);
    console.log(nombre + " ha sido agregado.");
  }

  function eliminarContacto(nombre) {
    const val = contactos.indexOf(nombre);
    if (val !== -1) {
      contactos.splice(val, 1);
      console.log(nombre + " ha sido eliminado.");
    } else {
      console.log($nombre + " no existe en la lista.");
    }
  }

  function imprimirContactos() {
    for (let i = 0; i < contactos.length; i++) {
      console.log(contactos[i]);
    }
  }