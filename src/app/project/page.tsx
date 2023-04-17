import React from 'react';
import Link from 'next/link';

export default function Projects() {
	return (
		<main>
			<div>Projects</div>
			<div><Link href='/project/jobit'>Jobit</Link></div>
			<div><Link href='/project/car_rent'>CarRent</Link></div>
		</main>
	);
}

