import React from 'react';
import IconWithName from './IconWithName';
import {FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiTypescript, SiTailwindcss, SiCsswizardry} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {AiOutlineHtml5, AiFillGithub} from 'react-icons/ai';

const Skills = () => (
	<main id='skills' className='w-full lg:h-screen p-2 bg-[url(/assets/skillsbg.svg)]'>
		<section className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
			<p className='text-xl tracking-widest uppercase text-[#0EA5E9] font-bold animate-pulse'>Skills</p>
			<h2 className='font-bold py-4'>What I can do</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
				<div>
					<IconWithName icon={<FaReact className='text-[#61DBFB]' size={40}/>} name='React' />
					<IconWithName icon={<SiNextdotjs className='text-black-200' size={40}/>} name='Next.Js' />
				</div>
				<div>
					<IconWithName icon={<IoLogoJavascript className='text-yellow-200' size={40}/>} name='JavaScript' />
					<IconWithName icon={<SiTypescript className='text-[#3178c6]' size={40}/>} name='TypeScript' />
				</div>
				<div>
					<IconWithName icon={<SiTailwindcss className='text-[#81d4fa]' size={40}/>} name='Tailwind' />
					<IconWithName icon={<AiOutlineHtml5 className='text-orange-500' size={40}/>} name='HTML' />
				</div>
				<div>
					<IconWithName icon={<SiCsswizardry className='text-[#2965f1]' size={40}/>} name='CSS' />
					<IconWithName icon={<AiFillGithub className='text-[#000000]' size={40}/>} name='Github' />
				</div>
			</div>
			<div className='mt-10'>Main Teck Stack</div>
		</section>
	</main>
);

export default Skills;
