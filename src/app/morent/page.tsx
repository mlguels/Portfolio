import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import SkillsSection from '../components/SkillsSection';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

export default function Morent() {
	return (
		<main id='morent' className='p-10 bg-[#3fc7f52a]'>
			<header>
				<title>Morent Case Study</title>
			</header>
			<div className='rounded-lg cursor-pointer'>
				<Link href='/#projects'>
					<BsFillArrowLeftSquareFill className='hover:shadow-lg' size={45} />
				</Link>
			</div>
			<div className='p-10'>
				<h2 className='text-4xl'>Morent Car Rentals</h2>
				<p className='pt-6 w-auto md:w-[65%] font-light'>Morent is a modern Car renting application that was developed using Next 13,
					Typescript and styled with Tailwind CSS. The Morent application is to have a Homepage: consisting of a banner and highlighted
					cars to rent, an All Cars page: which displays a list of vehicles, an Add Car page: Add car details (images, title, brand etc.) and a User page: which displays a list of cars rented
					by the user and cars put to rent by the user.
				</p>
				<div className='flex w-auto md:w-[45%] justify-between pt-8'>
					<div>
						<div className='font-bold'>Type</div>
						<div className='mt-4 text-sm font-light'>Open Source | Collaborative Project</div>
					</div>
					<div>
						<div className='font-bold'>Stack</div>
						<div className='mt-4 text-sm font-light'>React</div>
						<div className='text-sm font-light'>Next.Js</div>
						<div className='text-sm font-light'>TypeScript</div>
						<div className='text-sm font-light'>Tailwind</div>
					</div>
					<div>
						<div className='font-bold'>Live</div>
						<div className='text-sm mt-4 underline text-blue-500 font-light'>
							<a href='https://cohort3-jupiter-car-rent.vercel.app/' target='_blank' rel='noreferrer'>View Site</a>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:flex md:flex-row gap-20'>
					<div>
						<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/rentImg.png' width={1000} height={1000} alt='rent' />
					</div>
					<div className='flex items-center justify-center'>
						<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/mobileView.png' width={215} height={100} alt='rent' />
					</div>
				</div>
			</div>
			<hr />
			<div className='p-10'>
				<h2 className='text-4xl'>Project Purpose and Goal</h2>
				<p className='pt-6 w-auto lg:w-[55%] font-light'>The objective of this project is to replicate the daily experiences of a software engineer.
					Collaborating with a team of developers, engaging in regular daily standup meetings to foster effective communication and
					coordination. Consistently pushing code to GitHub, thereby gaining valuable experience in version control. Additionally,
					we held weekly team meetings with our mentor and sought feedback from multiple senior software engineers through pull request
					reviews.

				</p>
				<p className='pt-8 w-auto lg:w-[55%] font-light'>
					This project provided me with valuable opportunities to acquire new skills, including Next.js 13, TypeScript,
					and Tailwind CSS, thus enhancing my expertise in modern web development technologies.
				</p>
			</div>
			<div className='flex flex-col md:flex-row-reverse p-10 gap-8'>
				<div className='w-full md:w-1/2'>
					<h2 className='text-4xl'>Web Stack and Explanation</h2>
					<p className='pt-5 font-light'>
						Motivated by the desire to expand our skill set and embrace new technologies, my team and I made a conscious decision to embark
						on a learning journey. As a result, we enthusiastically opted to embrace Next.js 13, TypeScript, and Tailwind CSS. By adopting
						this innovative combination, we aimed to challenge ourselves and stay at the forefront of web development trends, empowering us
						to deliver exceptional results and broaden our expertise.
					</p>
					<p className='pt-8 font-light'>
						By combining Next.js 13, TypeScript, and Tailwind CSS, we have a powerful stack that enables us to create high-performance,
						maintainable, and visually appealing web applications. This modern combination of technologies ensures that we stay up-to-date
						with the latest web development trends and provides us with a solid foundation for building an exceptional user experience.
					</p>
				</div>
				<div className='bg-blue-400 rounded-xl md:w-1/2 p-4 hover:scale-105'>
					<SkillsSection imageUrl='/assets/nextjs.png' name='NextJS' />
					<SkillsSection imageUrl='/assets/typescript.png' name='Typescript' />
					<SkillsSection imageUrl='/assets/tailwind.png' name='Tailwind' />
				</div>
			</div>
			<hr />
			<div className='flex flex-col gap-6 md:flex-row md:justify-center'>
				<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/login.png' width={800} height={500} alt='login'></Image>
				<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/register.png' width={800} height={500} alt='register'></Image>
			</div>
			<div className='flex justify-center pb-6'>
				<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/loggedin.png' width={350} height={200} alt='loggedin'></Image>
			</div>
			<hr />
			<div className='p-10 bg-blue-400'>
				<div className='flex flex-col items-center gap-4'>
					<h2 className='text-4xl'>My Focus</h2>
					<p className='md:w-3/4 font-light'>
						Throughout this project, my primary focus was on grasping the fundamental concepts of each technology,
						considering it was my first encounter with them. I dedicated my efforts to the frontend development
						aspect, particularly in crafting the Car Card component and designing the login/register user interface,
						as well as the user profile UI. One of the significant achievements during this process was successfully
						implementing authentication using Next Auth, enabling users to authenticate using their Google and
						GitHub accounts. This hands-on experience allowed me to gain invaluable insights into the intricacies of
						these technologies and broaden my skill set in frontend development and user authentication.
					</p>
				</div>
			</div>
			<div className='flex justify-center pb-10'>
				<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/userView.png' width={1000} height={500} alt='UserPage'></Image>
			</div>
			<hr />
			<div className='p-10 flex justify-center gap-6'>
				<div className='bg-rose-400 rounded'>
					<div className='flex flex-col gap-4 items-center p-4'>
						<h2 className='text-4xl'>Problems Faced</h2>
						<p className='font-light md:w-3/4'>
						During the course of the project, I encountered several challenges that tested my problem-solving
						abilities. One of the initial hurdles was grappling with the structure of Next.js 13 and the
						organization of the app folder. As the App folder was still in the Beta phase, I faced limitations
						in implementing authentication using NextAuth since it was not yet supported with the App folder.
						Overcoming this obstacle required me to explore alternative solutions and adapt my approach to ensure
						the seamless functioning of the application despite the limitations posed by the current version of
						Next.js. Despite these setbacks, I remained resilient and resourceful, finding workarounds and
						leveraging available resources to deliver a successful outcome.
						</p>
					</div>
				</div>
				<div className='bg-blue-400 rounded'>
					<div className='flex flex-col gap-4 items-center p-4'>
						<h2 className='text-4xl'>Lessons Learned</h2>
						<p className='md:w-3/4 font-light'>
						Throughout the duration of this project, my main emphasis was on developing a solid understanding of
						the fundamental concepts underlying each technology. A crucial aspect of this learning process was
						becoming proficient in reading and comprehending documentation. Whenever I encountered challenges or
						roadblocks, I employed effective problem-solving techniques to troubleshoot and resolve the issues at
						hand. By leveraging my ability to tackle problems head-on, I was able to overcome obstacles and achieve
						successful outcomes. This experience not only enhanced my technical skills but also bolstered my
						confidence in addressing future challenges that may arise in my journey as a developer.
						</p>
					</div>
				</div>
			</div>
			<hr />
			<div className='flex justify-center py-12'>
				<Link href='morent'>
					<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200 animate-bounce'>
						<HiOutlineChevronDoubleUp className='text-[#0EA5E9]'/>
					</div>
				</Link>
			</div>
		</main>
	);
}
