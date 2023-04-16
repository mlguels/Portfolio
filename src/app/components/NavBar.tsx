'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineArrowLeft, AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='fixed w-full h-20 shadow-xl z-[100]'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<button className='hover:focus-visible: hover:opacity-30'>
					<Image src='/assets/Logo.png' alt='Logo' width={80} height={20}/>
				</button>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b-2'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b-2'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b-2'>Projects</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25}/>
					</div>
				</div>
			</div>

			<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/20' : ''}>
				<div className={
					nav
						? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 ease-in duration-500'
						: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
				}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image className='hover:scale-125 duration-300' src='/assets/Logo.png' alt='Logo' width={70} height={15}/>
							<div onClick={handleNav}>
								<AiOutlineArrowLeft />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>Aspiring Software Engineer</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul>
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='tracking-widest text-sm text-[#971616]'>Contact Me</p>
							<div className='flex items-center justify-around my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200'>
									<AiOutlineMail />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
