let contactos = [];

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  const contacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: {
      ciudad: ciudad,
      direccion: direccion
    }
  };
  contactos.push(contacto);
  console.log(nombres + " ha sido agregado.");
}

function eliminarContacto(nombre) {
  let val = -1;
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombres === nombre) {
      val = i;
      break;
    }
  }
  if (val !== -1) {
    const contactoEliminado = contactos.splice(val, 1);
    console.log(contactoEliminado[0].nombres + " ha sido eliminado.");
  } else {
    console.log(nombre + " no existe en la lista.");
  }
}

function imprimirContacto(nombre) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombres === nombre) {
      console.log(contactos[i]);
      return;
    }
  }
  console.log(nombre + " no existe en la lista.");
}

function actualizarContacto(nombre, tipoDato, nuevoDato) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombres === nombre) {
      switch (tipoDato) {
        case "nombres":
          contactos[i].nombres = nuevoDato;
          break;
        case "apellidos":
          contactos[i].apellidos = nuevoDato;
          break;
        case "telefono":
          contactos[i].telefono = nuevoDato;
          break;
        case "ciudad":
          contactos[i].ubicaciones.ciudad = nuevoDato;
          break;
        case "direccion":
          contactos[i].ubicaciones.direccion = nuevoDato;
          break;
        default:
          console.log("Tipo de dato no válido.");
          return;
      }
      console.log("El contacto ha sido actualizado.");
      return;
    }
  }
  console.log(nombre + " no existe en la lista.");
}

