import PaddingContainer from '@/components/paddingContainer';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { useForm } from 'react-hook-form';

type FormData = {
	email: string;
	password: string;
	passwordSecondary: string;
};

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const RegisterPage = () => {
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log('response', data);
	};

	return (
		<PaddingContainer padding='lg'>
			<div className='flex justify-center items-center flex-col'>
				<h2 className='font-bold text-black-300 text-4xl mb-8'>Register</h2>
				<div className='card shadow-xl w-full max-w-xl bg-base-200 '>
					<div className='card-body'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<p>Email</p>
							{errors.email && (
								<p role='alert' className='text-error'>
									{errors.email.message || 'Invalid email address'}
								</p>
							)}
							<input
								{...register('email', {
									required: true,
									pattern: EMAIL_REGEX,
								})}
								aria-invalid={errors.email ? 'true' : 'false'}
								type='text'
								className='input input-bordered w-full max-w-xl mb-4'
							/>
							<p>Password</p>
							{errors.password?.type === 'required' && (
								<p role='alert' className='text-error'>
									Invalid password
								</p>
							)}
							<input
								{...register('password', { required: true })}
								aria-invalid={errors.password ? 'true' : 'false'}
								type='password'
								className='input input-bordered w-full max-w-xl mb-4'
							/>
							<p>Confirm password</p>
							{errors.passwordSecondary && (
								<p role='alert' className='text-error'>
									{errors.passwordSecondary.message || 'Your passwords do not match!'}
								</p>
							)}
							<input
								{...register('passwordSecondary', {
									required: true,
									validate: (val: string) => {
										if (watch('password') !== val) return 'Your passwords do not match';
									},
								})}
								aria-invalid={errors.passwordSecondary ? 'true' : 'false'}
								type='password'
								className='input input-bordered w-full max-w-xl mb-4'
							/>

							<button className='btn btn-primary capitalize'>Register!</button>
						</form>
						<div className='divider m-0' />
						<div className='flex justify-between flex-wrap'>
							<Link className='btn btn-ghost capitalize' href='/auth/login'>
								<BiLogIn size={22} className='mr-2' />
								Login
							</Link>
							<button className='btn btn-ghost capitalize'>
								<FaLock size={18} className='mr-2' />
								Forgot Password?
							</button>
						</div>
					</div>
				</div>
			</div>
		</PaddingContainer>
	);
};

export default RegisterPage;
