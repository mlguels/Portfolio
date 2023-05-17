'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import copy from 'clipboard-copy';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const Email = () => {
	const [showCheck, setShowCheck] = useState(false);

	const handleClick = () => {
		const email = 'mrodandres@icloud.com';
		copy(email);
		setShowCheck(true);
		setTimeout(() => {
			setShowCheck(false);
		}, 3000);
	};

	return (
		<div className='rounded-lg cursor-pointer hover:scale-125 ease-in duration-200'>
			<button onClick={handleClick}>
				<Image src='/svg/email.svg' width={45} height={45} alt='email'/>
			</button>
			<div className='pl-2 text-sky-300'>
				{showCheck && (
					<ul className='flex flex-row'>
						<li className='font-ligh antialiased'>Email Copied!</li>
						<li><AiOutlineCheckCircle size={25} /></li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Email;
