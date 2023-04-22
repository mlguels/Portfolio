import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
	return (
		<main>
			<nav>
				<NavBar />
			</nav>
			<section>
				<Main />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</section>
		</main>
	);
}
