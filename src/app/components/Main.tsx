/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import Image from 'next/image';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Email from './Email';

const Main = () => (
	<main id='home' className='bg-[url(/assets/s.svg)]'>
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<section>
					<p className='text-2xl tracking-widest text-gray-400'>LET'S BUILD SOMETHING TOGETHER</p>
					<h1 className='py-4 text-3xl text-gray-700 font-bold'>Hello, I'm <span className='text-sky-500 animate-pulse'>Miguel</span> </h1>
					<h1 className='py-2 text-3xl text-gray-700 font-bold'>An Aspiring Software Engineer</h1>
					<hr className='border-b border-gray-300 my-8'/>
					<p className='bg-[#ffff] py-4 text-gray-600 font-semibold max-w-[70%] m-auto'>
              I'm an aspiring Software Engineer. Looking to get into full-stack web development. I am currently focused on building responsive UI web applications while learning back-end technologies.
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<a href='https://www.linkedin.com/in/miguel-rodriguez-6a5991222/' target='_blank' rel='noreferrer'>
							<LinkedIn />
						</a>
						<a href='https://github.com/mlguels' target='_black' rel='noreferrer'>
							<Github />
						</a>
						<Email />
					</div>
				</section>
				<Image className='md:w-[350px] animate-pulse hidden md:block' src='/assets/web.svg' width={100} height={100} alt='Software engineer'/>
			</div>
		</div>
	</main>
);

export default Main;
