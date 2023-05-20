import React, {type ReactElement, type FC} from 'react';
import {FaReact} from 'react-icons/fa';

type IconWithNameProps = {
	icon?: ReactElement;
	imageUrl?: any;
	name: string;
};

const IconWithName: FC<IconWithNameProps> = ({icon, name, imageUrl}) => (
	<main className='shadow-xl rounded-xl m-5 hover:scale-105 ease-in'>
		<div className='grid grid-cols-2 gap-4 justify-center items-center m-auto'>
			{icon} {imageUrl}
		</div>
		<div className='text-white'>
			<h3 className='font-sans flex flex-col items-center justify-center'>{name}</h3>
		</div>
	</main>
);

export default IconWithName;
