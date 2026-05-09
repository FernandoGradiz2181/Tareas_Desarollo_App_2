"use client";

import { useState } from "react";

import { Tarea } from "../Models/Tarea";

import { TareaContext } from "../Context/TareaContext";

interface Props {
  children: React.ReactNode;
}

export default function TareaProvider({
  children
}: Props) {

  const [tareas, setTareas] =
    useState<Tarea[]>([]);

  const agregarTarea = (
    titulo: string,
    descripcion: string
  ) => {

    const nuevaTarea: Tarea = {
      id: tareas.length + 1,
      titulo,
      descripcion,
      estado: "Pendiente"
    };

    setTareas([
      ...tareas,
      nuevaTarea
    ]);
  };

  const cambiarEstado = (
    id: number,
    estado: string
  ) => {

    const tareasActualizadas =
      tareas.map((tarea) => {

        if (tarea.id === id) {

          return {
            ...tarea,
            estado
          };
        }

        return tarea;
      });

    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (
    id: number
  ) => {

    const tareasFiltradas =
      tareas.filter(
        (tarea) => tarea.id !== id
      );

    setTareas(tareasFiltradas);
  };

  return (

    <TareaContext.Provider
      value={{
        tareas,
        agregarTarea,
        cambiarEstado,
        eliminarTarea
      }}
    >

      {children}

    </TareaContext.Provider>
  );
}