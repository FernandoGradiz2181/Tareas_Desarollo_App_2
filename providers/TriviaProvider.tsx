"use client";

import { useState } from "react";

import { Pregunta } from "../models/Pregunta";

import { TriviaContext } from "../contexts/TriviaContext";

interface Props {
  children: React.ReactNode;
}

export default function TriviaProvider({ children }: Props) {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);

  const [indicePregunta, setIndicePregunta] = useState(0);

  const [puntaje, setPuntaje] = useState(0);

  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

  const cargarPreguntas = () => {
    const listaPreguntas: Pregunta[] = [
      {
        idPregunta: 1,
        descripcionPregunta: "React fue creado por Facebook",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },

      {
        idPregunta: 2,
        descripcionPregunta: "Next.js es un lenguaje",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },

      {
        idPregunta: 3,
        descripcionPregunta: "TypeScript extiende JavaScript",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },

      {
        idPregunta: 4,
        descripcionPregunta: "HTML es un framework",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },

      {
        idPregunta: 5,
        descripcionPregunta: "CSS sirve para estilos",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
    ];

    setPreguntas(listaPreguntas);
  };

  const responderPregunta = (respuesta: boolean) => {
    const preguntaActual = preguntas[indicePregunta];

    if (respuesta === preguntaActual.respuestaCorrecta) {
      setPuntaje(puntaje + preguntaActual.puntajePregunta);
    }

    setPreguntasRespondidas(preguntasRespondidas + 1);
  };

  const siguientePregunta = () => {
    setIndicePregunta(indicePregunta + 1);
  };

  const reiniciarJuego = () => {
    setIndicePregunta(0);

    setPuntaje(0);

    setPreguntasRespondidas(0);
  };

  return (
    <TriviaContext.Provider
      value={{
        preguntas,
        indicePregunta,
        puntaje,
        preguntasRespondidas,
        cargarPreguntas,
        responderPregunta,
        siguientePregunta,
        reiniciarJuego,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}
