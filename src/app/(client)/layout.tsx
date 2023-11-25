'use client';
import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<RecoilRoot>
				<body>{children}</body>
			</RecoilRoot>
		</html>
	);
}
