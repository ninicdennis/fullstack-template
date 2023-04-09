import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';

const Header = () => {
	const [check, setCheck] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'light') setCheck(true);
	}, []);

	return (
		<div className='sticky top-0 z-50'>
			<div className='relative navbar bg-base-200 justify-between'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} htmlFor='my-drawer' className='btn btn-ghost drawer-button'>
							<IoMdMenu size={28} />
						</label>
					</div>
				</div>
				<div className='navbar-center'>
					<Link className='btn btn-ghost normal-case text-xl' href='/'>
						Next.js Template
					</Link>
				</div>
				<div className='navbar-end'>
					<button
						aria-label='Theme Toggle'
						className='btn btn-square btn-ghost'
						data-set-theme={check ? 'dark' : 'light'}
						data-act-class='ACTIVECLASS'
						onClick={() => setCheck(check ? false : true)}
					>
						{check ? <MdDarkMode size={28} /> : <MdLightMode size={28} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
