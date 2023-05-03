import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Morent() {
	return (
		<main className='p-10'>
			<header>
				<title>Morent Case Study</title>
			</header>
			<div className='w-fit py-2 px-4 bg-[#cbe1f4] rounded-lg hover:bg-[#e0e6ec] cursor-pointer'>
				<Link href='/#projects'>
					<div className='font-semibold'>Back</div>
				</Link>
			</div>
			<div className='p-10'>
				<h2 className='text-4xl'>Morent Car Rentals</h2>
				<p className='pt-6 w-auto md:w-[65%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<div className='flex w-auto md:w-[45%] justify-between pt-8'>
					<div>
						<div className='font-bold'>Type</div>
						<div className='mt-4 text-sm'>Intern</div>
					</div>
					<div>
						<div className='font-bold'>Stack</div>
						<div className='mt-4 text-sm'>React</div>
						<div className='text-sm'>Next.Js</div>
						<div className='text-sm'>TypeScript</div>
						<div className='text-sm'>Tailwind</div>
					</div>
					<div>
						<div className='font-bold'>Live</div>
						<div className='text-sm mt-4'>
							<a href='google.com'>View Site</a>
						</div>
					</div>
				</div>

				<Image className='mt-8 w-auto h-auto shadow-lg shadow-gray-400 pt-4' src='/assets/rentImg.png' width={1000} height={1000} alt='rent'></Image>
			</div>
			<div className='p-10'>
				<h2 className='text-4xl'>Project Purpose and Goal</h2>
				<p className='pt-6 w-auto lg:w-[55%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p className='pt-8 w-auto lg:w-[55%]'>
					It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
				</p>
			</div>
			<div className='p-10  lg:ml-[55%]'>
				<h2 className='text-4xl'>Web Stack and Explanation</h2>
				<p className='pt-6 w-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries, but also the
				</p>
				<p className='pt-8 w-auto'>
					It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
				</p>
			</div>
			<div>Instert images here</div>
		</main>
	);
}
