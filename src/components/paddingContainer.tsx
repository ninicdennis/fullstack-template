interface PaddingContainerProps {
	children: string | JSX.Element | JSX.Element[];
	padding: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const PaddingContainer = ({ children, padding = 'lg' }: PaddingContainerProps) => {
	const paddingToNumber = () => {
		switch (padding) {
			case 'xs':
				return 'py-1';
			case 'sm':
				return 'py-3';
			case 'md':
				return 'py-5';
			case 'lg':
				return 'py-7';
			case 'xl':
				return 'py-9';
		}
	};
	return <div className={paddingToNumber()}>{children}</div>;
};

export default PaddingContainer;
