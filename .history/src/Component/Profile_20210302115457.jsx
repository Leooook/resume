import React from 'react'

import Title from './Title'

function Profile(props) {
	return (
		<div id="profile" className="profile">
			<Title title="PROFILE" num="01" info="FRONT END DEVELOPER & DATA ANALYST" />
			<div className="propfileSection">
				<div>
					<h3 className="smallTitle">PERSONAL SUMMARY</h3>
					<p className="font">
						Highly motivated, responsible and industrious front end development professional qualified with
						a Master of IT. Combined up to 3 years of hands-on and research experience in front end
						development and artificial intelligence.<br />
						<br />Talented in JavaScript and React framework, confident in using React Redux, Context API
						and Hooks to build webs.<br />
						<br />Solid foundation in Computer Science. Proficient in Data Structure & Algorithm, machine
						learning and JavaScript.
					</p>
				</div>
				<div className="profilePicture" />
			</div>
		</div>
	)
}

export default Profile
