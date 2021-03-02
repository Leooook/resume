import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

import Title from './Title'

function Experience(props) {
	return (
		<div id="experience" className="experience">
			<Title title="EXPERIENCE" num="04" info="QUALIFICATIONS AND RELATED RESEARCH EXPERIENCE." />
			<div className="experienceSection">
				<div className="education">
					<h3 className="smallTitle">QUALIFICATIONS</h3>
					<div className="educationSection">
						<div className="educationLeft">
							<p className="font fontSty4"> Master of Information Technology </p>
							<p className="font fontSty1">The University of New South Wales </p>
							<p className="font fontSty2">
								2018 – 2020 &nbsp;&nbsp;&nbsp; <HiLocationMarker className="HiLocationMarker" /> Sydney
								Australia
							</p>
						</div>
						<div className="educationRight">
							<p className="font fontSty3">
								<b>Major:</b> Information Technology (Artificial Intelligence)
							</p>
							<p className="font fontSty3">
								<b>Relevant subject:</b> Machine Learning, Neural Network, Data Analysis
							</p>
							<p className="font fontSty3">
								<b>GPA:</b> <em>D</em> &nbsp; Artificial Intelligence (82), Data Warehouse and Data
								Mining (80), Information Technology (90)
							</p>
						</div>
					</div>
					<div className="educationSection">
						<div className="educationLeft">
							<p className="font fontSty4">Bachelor Information and Computation Science</p>
							<p className="font fontSty1">Xi’an University of Technology</p>
							<p className="font fontSty2">
								2013 – 2017 &nbsp;&nbsp;&nbsp; <HiLocationMarker className="HiLocationMarker" /> Xi’an
								China
							</p>
						</div>
						<div className="educationRight">
							<p className="font fontSty3">
								<b>Major:</b> Information and Computation Science
							</p>
							<p className="font fontSty3">
								<b>GPA:</b> 77
							</p>
						</div>
					</div>
				</div>
				<div className="projectExp">
					<h3 className="smallTitle">PROJECT EXPERIENCE</h3>
					<div className="projectSection">
						<div className="projectLeft">
							<p className="font fontSty1">Chatbot Development: Capstone Course</p>
						</div>
						<div className="projectRight">
							<ul>
								<li className="font listSty">
									Collaborated with a team to develop a chat bot to facilitate communication between
									university and students.
								</li>
								<li className="font listSty">
									Back-end trained google's NLP model which can accurately answer questions in related
									fields.
								</li>
								<li className="font listSty">
									Front-end development on complex features using JQuery such as register,
									login/logout, editing profile, check historical question, uploading pictures,
									statistics etc.
								</li>
								<li className="font listSty">
									Displayed in the showcase day and awarded for outstanding performance. Achieved 90%
									for this project.
								</li>
								<li className="font listSty">The source code can be found in Github.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="projectSection">
					<div className="projectLeft">
						<p className="font fontSty1">Web app Development: Heart disease identifier</p>
					</div>
					<div className="projectRight">
						<ul>
							<li className="font listSty">Built a web app from scratch within a team of four.</li>
							<li className="font listSty">
								Refine and extract data from the daily life report. Applied machine learning such as
								classification and cluster to trained and mining data and data visualisation techniques
								on Python.
							</li>
							<li className="font listSty">The source code can be found in Github.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
