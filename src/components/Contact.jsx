function Contact({ contacto, onDelete, onToggleFav }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        backgroundColor: contacto.favorito ? "#ffeaa7" : "#fff"
      }}
    >
      <h3>
        {contacto.nombre} {contacto.apellido}
      </h3>

      <p>{contacto.telefono}</p>

      <button onClick={() => onToggleFav(contacto.id)}>
        {contacto.favorito ? "Quitar Favorito" : "Agregar Favorito"}
      </button>

      <button
        onClick={() => onDelete(contacto.id)}
        style={{ marginLeft: "10px" }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Contact;