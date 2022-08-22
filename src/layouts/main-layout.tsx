import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<div className='bg-gray-100 text-gray-800  min-h-screen'>
			<div className=' container mx-auto p-10'>{children}</div>
		</div>
	);
};

export default MainLayout;
