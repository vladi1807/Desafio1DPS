import { useEffect, useState } from "react";
import Contact from "./Contact";
import data from "../data/contacts.json";

function ContactList() {
  const [contactos, setContactos] = useState([]);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
  });

  // Cargar JSON al iniciar
  useEffect(() => {
    setContactos(data);
  }, []);

  // Eliminar
  const eliminar = (id) => {
    const nuevaLista = contactos.filter(c => c.id !== id);
    setContactos(nuevaLista);
  };

  // Favoritos
  const toggleFavorito = (id) => {
    const nuevaLista = contactos.map(c =>
      c.id === id ? { ...c, favorito: !c.favorito } : c
    );

    setContactos(nuevaLista);
  };

  // Agregar
  const agregar = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.telefono) {
      alert("Complete todos los campos");
      return;
    }

    const nuevo = {
      id: Date.now(),
      ...form,
      favorito: false
    };

    setContactos([...contactos, nuevo]);

    setForm({
      nombre: "",
      apellido: "",
      telefono: ""
    });
  };

  // Ordenar favoritos primero
  const ordenados = [...contactos].sort(
    (a, b) => b.favorito - a.favorito
  );

  return (
    <div>
      <h2>Agenda de Contactos</h2>

      {/* Formulario */}
      <form onSubmit={agregar}>
        <input
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) =>
            setForm({ ...form, nombre: e.target.value })
          }
        />

        <input
          placeholder="Apellido"
          value={form.apellido}
          onChange={(e) =>
            setForm({ ...form, apellido: e.target.value })
          }
        />

        <input
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(e) =>
            setForm({ ...form, telefono: e.target.value })
          }
        />

        <button>Agregar</button>
      </form>

      <hr />

      {/* Lista */}
      {ordenados.map((c) => (
        <Contact
          key={c.id}
          contacto={c}
          onDelete={eliminar}
          onToggleFav={toggleFavorito}
        />
      ))}
    </div>
  );
}

export default ContactList;