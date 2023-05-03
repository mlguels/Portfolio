import React, {type ReactElement, type FC} from 'react';
import {FaReact} from 'react-icons/fa';

type IconWithNameProps = {
	icon: ReactElement;
	name: string;
};

const IconWithName: FC<IconWithNameProps> = ({icon, name}) => (
	<main className='p-4 shadow-xl rounded-xl m-5 hover:scale-105 ease-in bg-gradient-to-r from-[#0EA5E9] to-[#cbe1f4]'>
		<div className='grid grid-cols-2 gap-4 justify-center items-center m-auto animate-bounce'>
			{icon}
		</div>
		<div>
			<h3 className='font-sans flex flex-col items-center justify-center animate-pulse'>{name}</h3>
		</div>
	</main>
);

export default IconWithName;
