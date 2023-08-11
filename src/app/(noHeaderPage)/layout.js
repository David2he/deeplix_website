import "../../styles/globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Deeplix website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
