import { createContext } from "react";

import { Pregunta } from "../models/Pregunta";

interface TriviaContextProps {
  preguntas: Pregunta[];

  indicePregunta: number;

  puntaje: number;

  preguntasRespondidas: number;

  cargarPreguntas: () => void;

  responderPregunta: (respuesta: boolean) => void;

  siguientePregunta: () => void;

  reiniciarJuego: () => void;
}

export const TriviaContext = createContext<TriviaContextProps>({
  preguntas: [],

  indicePregunta: 0,

  puntaje: 0,

  preguntasRespondidas: 0,

  cargarPreguntas: () => {},

  responderPregunta: () => {},

  siguientePregunta: () => {},

  reiniciarJuego: () => {},
});
