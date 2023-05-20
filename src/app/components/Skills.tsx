import React from 'react';
import Image from 'next/image';
import SkillsSection from './SkillsSection';

const Skills = () => (
	<main id='skills' className='lg:h-screen bg-[url(/assets/laptop.jpg)] bg-cover bg-no-repeat'>
		<div className='flex flex-col items-center pt-[10%]'>
			<div>
				<h1 className='text-4xl tracking-widest uppercase text-[#0EA5E9] font-bold animate-pulse'>Skills</h1>
			</div>
			<div>
				<h2 className='font-bold py-4 text-white'>Technologies I've worked with.</h2>
			</div>
		</div>
		<div className='flex flex-col md:flex md:flex-row justify-around pl-8 pr-8 mt-8'>
			<div className='flex flex-col gap-6'>
				<SkillsSection imageUrl='/assets/react.png' name='React' />
				<SkillsSection imageUrl='/assets/typescript.png' name='Typescript' />
			</div>
			<div className='flex flex-col gap-6'>
				<SkillsSection imageUrl='/assets/css.png' name='CSS' />
				<SkillsSection imageUrl='/assets/html.png' name='HTML' />
			</div>
			<div className='flex flex-col gap-6'>
				<SkillsSection imageUrl='/assets/figma.png' name='Figma' />
				<SkillsSection imageUrl='/assets/javascript.png' name='Javscript' />
			</div>
			<div className='flex flex-col gap-6'>
				<SkillsSection imageUrl='/assets/mu5.png' name='Material UI' />
				<SkillsSection imageUrl='/assets/node.png' name='Node JS' />
			</div>
			<div className='flex flex-col gap-6'>
				<SkillsSection imageUrl='/assets/nextjs.png' name='NextJS' />
				<SkillsSection imageUrl='/assets/tailwind.png' name='Tailwind' />
			</div>
		</div>
	</main>
);

export default Skills;
