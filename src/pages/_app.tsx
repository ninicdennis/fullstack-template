import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@/components/header';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import CustomToaster from '@/components/toaster';
import Drawer from '@/components/drawer';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	// ? Used to fix some hydration issue for themeChange
	useEffect(() => {
		themeChange(false);
	});

	return (
		<>
			<SessionProvider session={session}>
				<Head>
					<title>Next.js Template</title>
				</Head>
				<CustomToaster />
				<Drawer
					mainContent={
						<>
							<Header />
							<Component {...pageProps} />
						</>
					}
				/>
			</SessionProvider>
		</>
	);
}
