import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import Auth0Provider from 'next-auth/providers/auth0';

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Auth0Provider({
			clientId: process.env.AUTH0_CLIENT_ID || '',
			clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
			issuer: process.env.AUTH0_ISSUER || '',
		}),
	],
});
