import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Web site created using create-react-app"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
					integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
					crossOrigin="anonymous"
				/>
				<title>Magnus</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
