import "../../styles/globals.scss";
import { Header } from "../../components/Header/Header";

export const metadata = {
    title: "Create Next App",
    description: "Deeplix website",
};

export default function HeaderPage({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="../favicon.ico" />
            </head>
            <body>
                <Header imageSource={"/logo_00.svg"} />
                {children}
            </body>
        </html>
    );
}
