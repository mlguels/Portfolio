import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';

export default function Home() {
	return (
		<main>
			<nav>
				<NavBar />
			</nav>
			<section>
				<Main />
				<About />
			</section>
		</main>
	);
}
