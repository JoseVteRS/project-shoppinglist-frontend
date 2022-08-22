import { ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
	kind: 'primary' | 'secondary';
	children: ReactNode;
};

const KIND: { [key: string]: string } = {
	primary: 'bg-orange-200/70',
	secondary: 'bg-white'
};

const SidebarLayout = ({ kind, children }: Props) => {
	return (
		<aside className={clsx(KIND[kind], 'min-h-screen p-10')}>{children}</aside>
	);
};

export default SidebarLayout;
