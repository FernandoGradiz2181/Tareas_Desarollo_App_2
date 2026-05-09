import React, { createContext, useState } from "react";
import { Tarea } from "../Models/Tarea";
interface TareaContextProps {
  tareas: Tarea[];

  agregarTarea: (titulo: string, descripcion: string) => void;

  cambiarEstado: (id: number, estado: string) => void;

  eliminarTarea: (id: number) => void;
}

export const TareaContext = createContext<TareaContextProps>({
  tareas: [],

  agregarTarea: () => {},

  cambiarEstado: () => {},

  eliminarTarea: () => {},
});
