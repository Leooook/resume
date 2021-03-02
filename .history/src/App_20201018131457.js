import React from 'react'

import Nav from './Component/Nav'
import Hero from './Component/Hero.jsx'
import Profile from './Component/Profile.jsx'
import Professional from './Component/Professional.jsx'
import Portfolio from './Component/Portfolio.jsx'
import Experience from './Component/Experience.jsx'
import Contact from './Component/Contact.jsx'

import './App.css'

function App() {
	return (
		<div>
			<Hero />
			<Nav />
			<Profile />
			<Professional />
			<Portfolio />
			<Experience />
			<Contact />
		</div>
	)
}

export default App
