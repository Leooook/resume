import React from 'react'
import { SiMailDotRu } from 'react-icons/si'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Contact(props) {
	return (
		<div id="contact" className="contact">
			<h1 className="title">CONTACT ME</h1>
			<div className="contactSection">
				<form
					className="contactForm"
					target="_blank"
					rel="noopener noreferrer"
					action="https://formspree.io/f/mjvpweyp"
					method="POST"
				>
					<input className="contactForm1" type="text" name="fullname" placeholder="Full Name" required />
					<input className="contactForm1" type="email" name="email" placeholder="Email Address" required />
					<input className="contactForm1" type="text" name="title" placeholder="Email Title" required />
					<textarea className="contactForm2" name="message" placeholder="Message(Optional)" />
					<input className="contactButton" type="submit" name="submit" />
				</form>
				<div className="linkSection">
					<a className="link" target="_blank" rel="noopener noreferrer" href="https://www.gmail.com">
						<SiMailDotRu className="linkLogo linkLogo2" />
						<p className="linkText">bohanzhao.unsw@gmail.com</p>
					</a>
					<br />
					<a
						className="link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/bohanzhao/"
					>
						<AiFillLinkedin className="linkLogo" />
						<p className="linkText">linkedin.com/in/bohanzhao</p>
					</a>
					<br />
					<a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/Leooook">
						<AiFillGithub className="linkLogo linkLogo1" />
						<p className="linkText">github.com/Leooook</p>
					</a>
					<br />
				</div>
			</div>
		</div>
	)
}

export default Contact
