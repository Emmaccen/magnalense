import { Inter, Work_Sans } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const roboto_mono = Work_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-work-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} work_sans`}>
			<body>{children}</body>
		</html>
	);
}
