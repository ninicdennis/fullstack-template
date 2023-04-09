import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@/components/header';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import CustomToaster from '@/components/toaster';
import Drawer from '@/components/drawer';

export default function App({ Component, pageProps }: AppProps) {
	// ? Used to fix some hydration issue for themeChange
	useEffect(() => {
		themeChange(false);
	});
	return (
		<>
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
		</>
	);
}
