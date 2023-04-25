/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import {useForm, ValidationError} from '@formspree/react';

const Contact = () => {
	const [state, handleSubmit] = useForm('mqkowwke');
	if (state.succeeded) {
		return <h3 className='flex justify-center text-[#cbe1f4]'>Talk to you Soon!</h3>;
	}

	return (
		<main className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-[#cbe1f4]'>Contact</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-2 h-full'>
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
							<form onSubmit={handleSubmit}>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input name='name' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Contact Number</label>
										<input name='contact_number' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
										<ValidationError
											prefix='Contact Number'
											field='contact_number'
											errors={state.errors}
										/>
									</div>
								</div>
								<div className='flex flex-col'>
									<label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
									<input id='email' type='email' name='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
									<ValidationError
										prefix='Email'
										field='email'
										errors={state.errors}
									/>
								</div>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input name='subject' type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
								</div>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea id='message' name='message' className='border-2 rounded-lg p-3 border-gray-300' rows={10} ></textarea>
									<ValidationError
										prefix='Message'
										field='message'
										errors={state.errors}
									/>
								</div>
								<button type='submit' disabled={state.submitting} className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-[#cbe1f4] w-full p-4 text-white mt-4'>Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200'>
							<HiOutlineChevronDoubleUp className='text-[#cbe1f4]'/>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Contact;
