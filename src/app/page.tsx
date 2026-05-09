"use client";


import {
  useContext,
  useEffect,
  useState
} from "react";




import { TriviaContext } from "../../contexts/TriviaContext";



export default function Page() {

  const {
    preguntas,
    indicePregunta,
    puntaje,
    preguntasRespondidas,
    cargarPreguntas,
    responderPregunta,
    siguientePregunta,
    reiniciarJuego
  } = useContext(TriviaContext);

  const [
    mensaje,
    setMensaje
  ] = useState("");

  const [
    mostrarBoton,
    setMostrarBoton
  ] = useState(false);

  useEffect(() => {

    cargarPreguntas();

  }, []);

  if (
    preguntas.length === 0
  ) {

   
  }

  const preguntaActual =
    preguntas[indicePregunta];

  const seleccionarRespuesta = (
    respuesta: boolean
  ) => {

    responderPregunta(respuesta);

    if (
      respuesta ===
      preguntaActual.respuestaCorrecta
    ) {

      setMensaje(
        "Respuesta Correcta"
      );

    } else {

      setMensaje(
        "Respuesta Incorrecta"
      );
    }

    setMostrarBoton(true);
  };

  return (
    <div style={{
      padding: "20px"
    }}>

      <h1>
        Juego de Trivia
      </h1>

      <h2>
        Puntaje: {puntaje}
      </h2>

      {indicePregunta <
      preguntas.length ? (

        <div>

          <h3>
            {
              preguntaActual
              .descripcionPregunta
            }
          </h3>

          <button 
            onClick={() =>
              seleccionarRespuesta(
                true
              )
            }
          >
            Verdadero
          </button>

          <button
            onClick={() =>
              seleccionarRespuesta(
                false
              )
            }
          >
            Falso
          </button>

          <h3>{mensaje}</h3>

          {mostrarBoton && (

            <button
              onClick={() => {

                setMensaje("");

                setMostrarBoton(
                  false
                );

                siguientePregunta();
              }}
            >
              Siguiente Pregunta
            </button>

          )}

        </div>

      ) : (

        <div>

          <h2>
            Trivia Finalizada
          </h2>

          <h3>
            Puntaje Final:
            {puntaje}
          </h3>

          <h3>
            Preguntas Respondidas:
            {preguntasRespondidas}
          </h3>

          <button
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>

        </div>

      )}

    </div>
  );
}