import React from 'react';
import Image from 'next/image';

type SkillsSectionProps = {
	name: string;
	imageUrl: string;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({name, imageUrl}) => (
	<main>
		<ul className='flex flex-col gap-2 items-center hover:opacity-5'>
			<li>
				<div className='bg-white py-2 px-2 rounded-2xl'>
					<Image src={imageUrl} width={40} height={25} alt='Logo' />
				</div>
			</li>
			<li>
				<p className='text-white font-thin text-sm'>{name}</p>
			</li>
		</ul>
	</main>
);

export default SkillsSection;
