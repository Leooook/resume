import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

function Hero(props) {
	const pageMoveDown = () => {
		let anchorElement = document.getElementById('nav')
		anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
	}

	return (
		<div id="hero">
			<div className="hero" />
			<div className="heroSector">
				<h1 className="heroTitle">
					<span className="heroTitle1">
						I<span className="heroTitle2">'</span>M
					</span>
					<br />LEO<br />ZHAO<span className="heroTitle2">.</span>
				</h1>
				<BiDownArrow className="heroIcon" onClick={pageMoveDown} />
			</div>
		</div>
	)
}

export default Hero
