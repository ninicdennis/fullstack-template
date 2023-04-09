import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdClose } from 'react-icons/io';

const Drawer = ({ mainContent }: { mainContent: JSX.Element | JSX.Element[] }) => {
	const router = useRouter();

	const NAVIGATION: { title: string; href: string }[] = [
		{ title: 'Login', href: '/auth/login' },
		{ title: 'Register', href: '/auth/register' },
	];

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
					{NAVIGATION.map(({ title, href }) => (
						<Link
							className={`btn w-full btn-${
								router.pathname === href ? 'secondary' : 'ghost'
							} text-left capitalize self-baseline`}
							key={title}
							href={href}
						>
							{title}
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Drawer;
