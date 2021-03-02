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
								2018 – 2020 &nbsp;&nbsp;&nbsp; <HiLocationMarker className="HiLocationMarker" />
								Sydney，Australia
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
								<b>
									GPA: <em>Distinction</em>
								</b>
								&nbsp; Artificial Intelligence (82), Data Warehouse and Data Mining (80), Information
								Technology (90)
							</p>
						</div>
					</div>
					<div className="educationSection">
						<div className="educationLeft">
							<p className="font fontSty4">Bachelor Information and Computation Science</p>
							<p className="font fontSty1">Xi’an University of Technology</p>
							<p className="font fontSty2">
								2013 – 2017 &nbsp;&nbsp;&nbsp; <HiLocationMarker className="HiLocationMarker" /> Xi’an，
								China
							</p>
						</div>
						<div className="educationRight">
							<p className="font fontSty3">
								<b>Major:</b> Information and Computation Science
							</p>
							<p className="font fontSty3">
								<b>Relevant subject:</b> Mathematical Analysis, Discrete Mathematics, Complex Variable
								Functions
							</p>
							<p className="font fontSty3">
								<b>
									GPA: <em>Distinction</em>
								</b>
								&nbsp; C++ Language Programming (91), Operating System (94), Multimedia Technology (95)
							</p>
						</div>
					</div>
				</div>
				<div className="projectExp">
					<h3 className="smallTitle">RESEARCH EXPERIENCE</h3>
					<div className="projectSection">
						<div className="projectLeft">
							<p className="font fontSty1">CHATBOT</p>
						</div>
						<div className="projectRight">
							<ul>
								<li className="font listSty">
									Cooperated with a four-person team to develop the CHATBOT application. The purpose
									of the chatbot is to answers questions for students to reduce the workload of
									officers in IT faculty.
								</li>
								<li className="font listSty">
									I help with both front-end and back-end using jQuery, Python Flask and API
									development.
								</li>
								<li className="font listSty">
									I help with turning the Machine learning model, I also implemented functional
									modules including uploading pictures, login and user register.
								</li>
								<li className="font listSty">
									As a result, we achieved 91% accuracy in classifying the questions using Google's
									NLP Bert model.
								</li>
								<li className="font listSty">
									Github link please click&nbsp;
									<a
										className="fontLink"
										href={'https://github.com/Leooook/Chat-Bot'}
										target="view_window"
									>
										here
									</a>.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="projectSection">
					<div className="projectLeft">
						<p className="font fontSty1">Heart Disease Recognition</p>
					</div>
					<div className="projectRight">
						<ul>
							<li className="font listSty">
								Heart Disease Recognition is a four-person team cooperated web application that can
								analyse the various of data and predict whether the user has potential heart disease.
							</li>
							<li className="font listSty">
								My major tasks were to clean the messy data, create figures and used Random Forest to
								train classification model.
							</li>
							<li className="font listSty">
								As a result, we achieved 90% accuracy in recognising heart disease and finished all
								functions.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
