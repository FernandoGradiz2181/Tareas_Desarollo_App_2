"use client";

import { useContext } from "react";

import { Tarea } from "../Models/Tarea";

import { TareaContext } from "../Context/TareaContext";

interface Props {
  tarea: Tarea;
}

export default function FilaTarea({ tarea }: Props) {
  const { cambiarEstado, eliminarTarea } = useContext(TareaContext);

  return (
    <tr>
      <td>{tarea.id}</td>

      <td>{tarea.titulo}</td>

      <td>{tarea.descripcion}</td>

      <td>{tarea.estado}</td>

      <td>
        <select
          value={tarea.estado}
          onChange={(e) => cambiarEstado(tarea.id, e.target.value)}
        >
          <option>Pendiente</option>

          <option>En Proceso</option>

          <option>Completada</option>
        </select>
      </td>

      <td>
        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
      </td>
    </tr>
  );
}
