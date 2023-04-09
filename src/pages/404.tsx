import PaddingContainer from '@/components/paddingContainer';
import Link from 'next/link';

export default function Custom404() {
	return (
		<PaddingContainer padding='lg'>
			<div className='text-center'>
				<h2 className='font-bold text-black-300 text-6xl'>404 - Not found</h2>
				<h3 className='mb-2 text-2xl font-bold text-centermd:text-3xl'>
					Sorry, the page you requested could not be found!
				</h3>
				<Link href='/' className='btn btn-primary'>
					Get back home!
				</Link>
			</div>
		</PaddingContainer>
	);
}
