import TriviaProvider from "../../providers/TriviaProvider";
import "./globals.css";


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">

      <body>

        <TriviaProvider>

          {children}

        </TriviaProvider>

      </body>

    </html>
  );
}