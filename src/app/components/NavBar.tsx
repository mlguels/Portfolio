'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiOutlineMenu, AiOutlineArrowLeft, AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Email from './Email';

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	useEffect(() => {
		const addShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};

		window.addEventListener('scroll', addShadow);
	}, []);

	return (
		<main>
			<header>
				<nav style={{backgroundColor: 'white'}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
					<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
						<button className='hover:focus-visible: hover:opacity-30'>
							<Link href='/'>
								<Image src='/assets/LightModeLogo.png' alt='Logo' width={80} height={40}/>
							</Link>
						</button>
						<div>
							<ul className='hidden md:flex'>
								<Link href='/'>
									<li className='ml-10 text-sm uppercase hover:border-b-2'>Home</li>
								</Link>
								<Link href='/#about'>
									<li className='ml-10 text-sm uppercase hover:border-b-2'>About</li>
								</Link>
								<Link href='/#projects'>
									<li className='ml-10 text-sm uppercase hover:border-b-2'>Projects</li>
								</Link>
								<Link href='/#contact'>
									<li className='ml-10 text-sm uppercase hover:border-b-2'>Contact</li>
								</Link>
							</ul>
							<div onClick={handleNav} className='md:hidden'>
								<AiOutlineMenu size={25}/>
							</div>
						</div>
					</div>

					<div className={isDrawerOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/20' : ''}>
						<div className={
							isDrawerOpen
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
						}>
							<div>
								<div className='flex w-full items-center justify-between'>
									<Link href='/'>
										<Image onClick={() => {
											setIsDrawerOpen(false);
										}} className='hover:scale-125 duration-300' src='/assets/LightModeLogo.png' alt='Logo' width={70} height={15}/>
									</Link>
									<div onClick={handleNav} className='animate-pulse'>
										<AiOutlineArrowLeft />
									</div>
								</div>
								<div className='border-b border-gray-300 my-4'>
									<p className='w-[85%] md:w-[90%] py-4 text-[#0072b1] tracking-widest font-semibold'>Miguel's Portfolio</p>
								</div>
							</div>
							<div className='py-4 flex flex-col'>
								<ul>
									<Link href='/'>
										<li onClick={() => {
											setIsDrawerOpen(false);
										}} className='py-4 text-sm'>Home</li>
									</Link>
									<Link href='/#about'>
										<li onClick={() => {
											setIsDrawerOpen(false);
										}} className='py-4 text-sm'>About</li>
									</Link>
									<Link href='/#projects'>
										<li onClick={() => {
											setIsDrawerOpen(false);
										}} className='py-4 text-sm'>Projects</li>
									</Link>
									<Link href='/#contact'>
										<li onClick={() => {
											setIsDrawerOpen(false);
										}} className='py-4 text-sm'>Contact</li>
									</Link>
								</ul>
								<div className='pt-40'>
									<p className='tracking-widest text-sm text-[#0072b1] font-semibold'>Contact Me</p>
									<div className='flex items-center justify-around my-4 w-full sm:w-[80%]'>
										<a href='https://www.linkedin.com/in/miguel-rodriguez-6a5991222/' target='_blank' rel='noreferrer'>
											<LinkedIn />
										</a>
										<a href='https://github.com/mlguels' target='_black' rel='noreferrer'>
											<Github />
										</a>
										<a href='@mrodandres@icloud.com'>
											<Email />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</main>
	);
};

export default NavBar;
