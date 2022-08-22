import React, { Fragment } from 'react';
import { clsx } from 'clsx';

type Props = {
	as: string;
	kind: string;
	size: string;
	className: string;
	children: React.ReactNode;
};

const KINDS: { [key: string]: string } = {
	primary: 'text-slate-800',
	secondary: 'text-slate-600'
};

const SIZES: { [key: string]: string } = {
	small: 'text-xs',
	medium: 'text-md',
	large: 'text-lg',
	extralarge: 'text-2xl'
};

const Text = ({
	as = 'p',
	kind = 'primary',
	size = 'medium',
	className,
	...props
}: Props) => {
	const ComponentTag = as;

	return (
		<ComponentTag
			className={clsx(
				'flex items-center justify-center rounded-sm',
				SIZES[size],
				KINDS[kind],
				className
			)}
			{...props}
		/>
	);
};

export default Text;
