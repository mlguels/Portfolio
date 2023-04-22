/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => (
	<main className='w-full md:h-screen p-2 flex items-center py-16'>
		<header className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
			<div className='col-span-2'>
				<p className='uppercase text-2xl tracking-widest text-[#cbe1f4] font-bold'>
          About
				</p>
				<h2 className='py-4 font-bold'>Who I Am</h2>
				<p className='py-2 text-gray-600 font-light'>
            Hi there, I'm Miguel! I'm a web developer who got into coding just a year ago.
            My journey started with learning JavaScript as my first language, followed
            by the basics of HTML and CSS. I created my first landing page and shortly
            after, joined the JSM Master Class experience. With my newfound knowledge
            and skills, I was able to embark on my first React project with a team of developers. I'm passionate
            about creating user-friendly and responsive web applications, and I'm
            constantly learning and exploring new technologies to improve my craft.
				</p>
				<p className='py-2 text-gray-600 font-light'>
            When I was seeking a business degree, I wasn't entirely sure
            where it would take me. However, when I began to code I realized that my
            true passion lay in the field of software engineering. Despite having no prior experience
            in coding, I was determine to learn and develop my skills. I started teaching myself
            the basics of programming and gradually worked my way up. My main stack at the moment is
            working with Next.js, TypeScript and styling with Tailwind CSS.
				</p>
				<Link href='/'>
					<p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
					</p>
				</Link>
			</div>
			<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
				<Image className='rounded-xl' src='/assets/coding2.jpeg'width={600} height={300} alt='Coding Image'/>
			</div>
		</header>
	</main>
);

export default About;
