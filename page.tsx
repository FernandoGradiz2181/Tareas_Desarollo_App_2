import Input from "./Components/Input";
import Conversor from "./Components/conversor";


export default function Home() {

  
  const temperatura = 120;
  const unidad = 'F';

  return (
    <main style={{ padding: "40px", alignItems: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Conversor de Temperatura</h1>

      <Input value={temperatura} unit={unidad} />
      <Conversor value={temperatura} unit={unidad} />

    </main>
  );
}
