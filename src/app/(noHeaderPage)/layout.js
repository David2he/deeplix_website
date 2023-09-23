import "../../styles/globals.scss";

export const metadata = {
    title: "Create Next App",
    description: "Deeplix website",
};

export default function NoHeaderPage({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
