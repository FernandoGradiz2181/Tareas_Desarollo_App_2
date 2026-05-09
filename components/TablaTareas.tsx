"use client";

import { useContext } from "react";

import { TareaContext } from "../Context/TareaContext";

import FilaTarea from "./FilaTarea";

export default function TablaTareas() {
  const { tareas } = useContext(TareaContext);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>

          <th>Título</th>

          <th>Descripción</th>

          <th>Estado</th>

          <th>Cambiar Estado</th>

          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody>
        {tareas.map((tarea) => (
          <FilaTarea key={tarea.id} tarea={tarea} />
        ))}
      </tbody>
    </table>
  );
}
