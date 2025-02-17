import "../../styles/globals.scss";

export const metadata = {
	title: "DEEPFLIX",
	description: "DeepFlix website",
};

export default function NoHeaderPage({ children }) {
	return (
		<html lang="fr">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
