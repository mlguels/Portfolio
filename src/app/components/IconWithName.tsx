import React, {type ReactElement, type FC} from 'react';
import {FaReact} from 'react-icons/fa';

type IconWithNameProps = {
	icon: ReactElement;
	name: string;
};

const IconWithName: FC<IconWithNameProps> = ({icon, name}) => (
	<main className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in'>
		<div className='grid grid-cols-2 gap-4 justify-center items-center m-auto'>
			{icon}
		</div>
		<div>
			<h3 className='font-medium flex flex-col items-center justify-center'>{name}</h3>
		</div>
	</main>
);

export default IconWithName;
