import "../../styles/globals.scss";
import {Header} from "../../components/Header/Header";

export const metadata = {
  title: "Create Next App",
  description: "Deeplix website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header imageSource={'/logo_00.svg'}/>
        {children}
      </body>
    </html>
  );
}
