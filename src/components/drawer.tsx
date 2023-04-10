import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdClose } from 'react-icons/io';
import { useSession, signIn, signOut } from 'next-auth/react';

const Drawer = ({ mainContent }: { mainContent: JSX.Element | JSX.Element[] }) => {
	const router = useRouter();
	const { data: session } = useSession();

	const NAVIGATION: { title: string; href: string; reqAuth: false }[] = [];

	return (
		<div className='drawer '>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>{mainContent}</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer' className='drawer-overlay'></label>

				<ul className='menu p-4 w-80 bg-base-100 text-base-content align-baseline'>
					<div className='flex justify-between items-center'>
						<p className='font-bold text-xl'>Menu</p>
						<label tabIndex={0} htmlFor='my-drawer' className='btn btn-ghost drawer-button self-end '>
							<IoMdClose size={28} />
						</label>
					</div>
					<div className='divider m-0' />
					{NAVIGATION.map(({ title, href, reqAuth }) => (
						<>
							{reqAuth && !session?.user ? null : (
								<Link
									className={`btn w-full btn-${
										router.pathname === href ? 'secondary' : 'ghost'
									} text-left capitalize self-baseline`}
									key={title}
									href={href}
								>
									{title}
								</Link>
							)}
						</>
					))}
					{session?.user ? (
						<>
							<p className='text-sky-600'> {session.user.name}</p>
							<button
								className={`btn w-full btn-${
									router.pathname === '/auth/logout' ? 'secondary' : 'ghost'
								} text-left capitalize self-baseline`}
								onClick={() => signOut()}
							>
								Sign Out
							</button>
						</>
					) : (
						<button
							className={`btn w-full btn-${
								router.pathname === '/auth/login' ? 'secondary' : 'ghost'
							} text-left capitalize self-baseline`}
							onClick={() => signIn()}
						>
							Sign In
						</button>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Drawer;
