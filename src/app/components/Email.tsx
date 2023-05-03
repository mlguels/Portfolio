import React from 'react';
import Image from 'next/image';

const Email = () => (
	<div className='bg-[#ffff] rounded-lg shadow-xl shadow-[#7caad3]  cursor-pointer hover:scale-125 ease-in duration-200'>
		<Image src='/assets/email.svg' width={45} height={45} alt='email'/>
	</div>
);

export default Email;
