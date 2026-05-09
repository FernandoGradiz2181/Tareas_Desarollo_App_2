"use client";

import { useContext, useState } from "react";

import { TareaContext } from "../Context/TareaContext";

export default function FormularioTarea() {
  const { agregarTarea } = useContext(TareaContext);

  const [titulo, setTitulo] = useState("");

  const [descripcion, setDescripcion] = useState("");

  const manejarEnvio = () => {
    agregarTarea(titulo, descripcion);

    setTitulo("");
    setDescripcion("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <br />

      <button onClick={manejarEnvio}>Agregar Tarea</button>
    </div>
  );
}
