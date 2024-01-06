import { inter } from './font';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.className} font-inter`}>
			<body>{children}</body>
		</html>
	);
}
