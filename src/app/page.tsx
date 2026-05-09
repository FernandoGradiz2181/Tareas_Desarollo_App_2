"use client";
import TareaProvider from "../../Providers/TareaProvider";

import FormularioTarea from "../../components/FormularioTarea";

import TablaTareas from "../../components/TablaTareas";

export default function Page() {

  return (

    <TareaProvider>

      <div style={{
        padding: "20px"
      }}>

        <h1>
          Lista de Tareas
        </h1>

        <FormularioTarea />

        <br />

        <TablaTareas />

      </div>

    </TareaProvider>
  );
}