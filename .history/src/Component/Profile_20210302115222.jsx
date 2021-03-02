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
						<br />I have strong passion for web design and I like to spend time fixing small details and
						optimizing web applications. And I am willing to spend time to study more programming
						techniques.<br />
						<br />I also enjoy the fun of teamwork, because we can learn from each other and grow.
					</p>
				</div>
				<div className="profilePicture" />
			</div>
		</div>
	)
}

export default Profile
