import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';

export default function Home() {
	return (
		<main>
			<nav>
				<NavBar />
			</nav>
			<section>
				<Main />
			</section>
		</main>
	);
}
