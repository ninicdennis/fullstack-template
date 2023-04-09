import PaddingContainer from '@/components/paddingContainer';

export default function Home() {
	return (
		<PaddingContainer padding='lg'>
			<div className='flex justify-center items-center'>
				<div className='prose'>
					<h1 className='text-center'> Please edit me!</h1>
					<h3 className='text-center'>This file is located at:`src/pages/index.tsx` </h3>
				</div>
			</div>
		</PaddingContainer>
	);
}
