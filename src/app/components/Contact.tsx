/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact = () => (
	<main className='w-full lg:h-screen'>
		<div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
			<p className='text-xl tracking-widest uppercase text-[#cbe1f4]'>Contact</p>
			<h2 className='py-4'>Get In Touch</h2>
			<div className='grid lg:grid-cols-4 gap-8'>
				{/* left */}
				<div className='cols-span-3 lg:cols-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='lg:p-4 h-full'>
						<div>
							<img className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/ContactPic.webp' alt='/'/>
						</div>
						<div>
							<h2 className='py-2'>Miguel</h2>
							<p>Software Engineer</p>
							<p className='py-4'>I'm available for freelance or full-time positions.</p>
						</div>
						<div>
							<p className='uppercase pt-8'>Connect With Me</p>
							<div className='flex items-center justify-center gap-5 p-5'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200'>
									<FaLinkedin />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200'>
									<AiOutlineMail />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* right */}
				<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
					<div className='p-4'>
						<form>
							<div className='gird md:grid-cols-2 gap-4 w-full py-2'>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Name</label>
									<input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
);

export default Contact;
