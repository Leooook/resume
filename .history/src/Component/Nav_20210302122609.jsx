import React, { Component } from 'react'
import { BsX, BsList } from 'react-icons/bs'
import { IoIosArrowDropupCircle } from 'react-icons/io'

class Nav extends Component {
	state = {
		isOpen: false
	}

	handleChange = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	scrollToAnchor = (anchorName) => {
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName)
			if (anchorElement) {
				anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
				this.setState({ isOpen: !this.state.isOpen })
			}
		}
	}

	scrollToAnchor1 = (anchorName) => {
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName)
			if (anchorElement) {
				anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
			}
		}
	}

	divPosition = (e) => {
		var hero = document.getElementById('hero').offsetTop
		var profile = document.getElementById('profile').offsetTop
		var professional = document.getElementById('professional').offsetTop
		var portfolio = document.getElementById('portfolio').offsetTop
		var experience = document.getElementById('experience').offsetTop
		var contact = document.getElementById('contact').offsetTop

		const pos = window.pageYOffset + window.innerHeight

		if (pos > hero && pos <= profile) {
			this.addClass(1)
		} else if (pos > profile && pos <= professional) {
			this.addClass(2)
		} else if (pos > professional && pos <= portfolio) {
			this.addClass(3)
		} else if (pos > portfolio && pos <= experience) {
			this.addClass(4)
		} else if (pos > experience && pos <= contact) {
			this.addClass(5)
		} else if (pos > contact) {
			this.addClass(6)
		}
	}

	addClass = (num) => {
		for (var i = 1; i < 7; i++) {
			if (i === num) {
				document.getElementById(`tag${i}`).classList.add('navHover')
			} else {
				document.getElementById(`tag${i}`).classList.remove('navHover')
			}
		}
	}

	handleScroll = (e) => {
		var header = document.getElementById('nav')
		var up = document.getElementById('upArrow')
		if (window.pageYOffset >= window.innerHeight) {
			header.classList.add('navFixed')
		} else {
			header.classList.remove('navFixed')
		}
		if (window.pageYOffset >= window.innerHeight * 1.5) {
			up.classList.add('upArrow')
		} else {
			up.classList.remove('upArrow')
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
		window.addEventListener('scroll', this.divPosition)
	}

	render() {
		return (
			<div>
				<div className="nav" id="nav">
					{this.state.isOpen ? (
						<BsX onClick={() => this.handleChange()} className="navIcon" />
					) : (
						<BsList onClick={() => this.handleChange()} className="navIcon" />
					)}
				</div>
				<ul className={this.state.isOpen ? 'navList' : 'navList navListClose'}>
					<li className="eachNavList" id="tag1" onClick={() => this.scrollToAnchor('hero')}>
						HOME
					</li>
					<li className="eachNavList" id="tag2" onClick={() => this.scrollToAnchor('profile')}>
						PROFILE
					</li>
					<li className="eachNavList" id="tag4" onClick={() => this.scrollToAnchor('portfolio')}>
						PORTFOLIO
					</li>
					<li className="eachNavList" id="tag3" onClick={() => this.scrollToAnchor('professional')}>
						PROFESSIONAL
					</li>
					<li className="eachNavList" id="tag5" onClick={() => this.scrollToAnchor('experience')}>
						EXPERIENCE
					</li>
					<li className="eachNavList" id="tag6" onClick={() => this.scrollToAnchor('contact')}>
						CONTACT
					</li>
				</ul>
				<IoIosArrowDropupCircle
					id="upArrow"
					className="upArrowHide"
					onClick={() => this.scrollToAnchor1('hero')}
				/>
			</div>
		)
	}
}

export default Nav
