/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import rentImg from '/Users/miguel/portfolio/public/assets/rentImg.png';
import ProjectItem from './ProjectItem';

const Projects = () => (
	<main id='projects' className='w-full bg-[#F5F5F5]'>
		<div className='max-w-[1240px] mx-auto px-2 py-16'>
			<h2 className='text-xl tracking-widest text-[#cbe1f4]'>Projects</h2>
			<h2 className='py-4'>What I've Built</h2>
			<div className='grid md:grid-cols-2 gap-8'>
				<ProjectItem title='Morent' backgroundImg={rentImg} projectUrl='/morent'/>
				<ProjectItem title='Morent' backgroundImg={rentImg} projectUrl='/'/>
				<ProjectItem title='Morent' backgroundImg={rentImg} projectUrl='/'/>
				<ProjectItem title='Morent' backgroundImg={rentImg} projectUrl='/'/>
			</div>
		</div>
	</main>
);

export default Projects;
