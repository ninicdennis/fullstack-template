import { Transition } from '@headlessui/react';
import { Toaster, resolveValue, ToastType, ToastIcon } from 'react-hot-toast';

const CustomToaster = () => {
	const resolveAlertType = (type: ToastType) => {
		switch (type) {
			case 'error':
				return 'alert-error';
			case 'success':
				return 'alert-success';
			case 'loading':
				return '';
			default:
				return 'alert-info';
		}
	};

	return (
		<Toaster position='bottom-right' gutter={8}>
			{(t) => (
				<Transition
					appear
					show={t.visible}
					className={`transform p-4 flex ${resolveAlertType(t.type)} rounded shadow-lg`}
					enter='transition-all duration-150'
					enterFrom='opacity-0 scale-50'
					enterTo='opacity-100 scale-100'
					leave='transition-all duration-150'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-75'
				>
					<ToastIcon toast={t} />
					<p className='px-2'>{resolveValue(t.message, t)}</p>
				</Transition>
			)}
		</Toaster>
	);
};

export default CustomToaster;
