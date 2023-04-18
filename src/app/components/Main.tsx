import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Main = () => {
	const test = 1;
	return (
		<main>
			<div className='w-full h-screen text-center'>
				<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
					<section>
						<p className='text-md tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
						<h1 className='py-4 text-3xl text-gray-700 font-bold'>Hello, I'm <span className='text-[#971616]'>Miguel</span> </h1>
						<h1 className='py-2 text-3xl text-gray-700 font-bold'>An Aspiring Software Engineer</h1>
						<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I'm an aspiring Software Engineer. Looking to get into full-stack web development. I am currently focused on building responsive UI web applications while learning back-end technologies.
						</p>
						<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-200'>
								<FaLinkedin />
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-200'>
								<FaGithub />
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-200'>
								<AiOutlineMail />
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default Main;
