import { clsx } from 'clsx';
import {
	AriaAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC
} from 'react';

interface Props
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		AriaAttributes {
	kind?: string;
	size?: string;
	children?: React.ReactNode;
}

const KINDS: { [key: string]: string } = {
	primary: 'text-white bg-sl-orange',
	secondary: 'text-white bg-sl-blue',
	tertiary: 'font-semibold'
};

const SIZES: { [key: string]: string } = {
	small: 'h-10 text-xs px-4',
	regular: 'h-12 px-6',
	large: 'h-14 text-lg px-8'
};

const Button: FC<Props> = ({
	kind = 'primary',
	size = 'regular',
	...props
}: Props) => {
	return (
		<button
			className={clsx(
				'flex items-center justify-center rounded-md',
				SIZES[size],
				KINDS[kind]
			)}
			{...props}
		/>
	);
};

export default Button;
