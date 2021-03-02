import React from 'react'

import Title from './Title'

function EachAbility({ name, level, type }) {
	return (
		<div className="eachAbility">
			<div className="font"> {name}</div>
			<div className="levelBlock">
				<div className={`length l${level} ${type}`} />
				<div className="font"> {level} / 3 </div>
			</div>
		</div>
	)
}

function Professional(props) {
	return (
		<div id="professional" className="professional">
			<Title title="PROFESSIONAL" num="03" info="IT'S MY SKILLS SUMMARY." />
			<section className="professionalSection">
				<EachAbility name="HTML5" level="3" />
				<EachAbility name="CSS3.0" level="3" />
				<EachAbility name="JavaScript" level="3" />
				<EachAbility name="Python" level="3" />
				<EachAbility name="SQL" level="2" />
				<EachAbility name="C" level="2" />
				<EachAbility name="C++" level="1" />
				<EachAbility name="NodeJS" level="1" />
				<EachAbility name="Perl" level="1" />
				<EachAbility name="ReactJS" level="3" type="type1" />
				<EachAbility name="React-Redux" level="3" type="type1" />
				<EachAbility name="JQuery" level="2" type="type1" />
				<EachAbility name="Sass" level="2" type="type1" />
				<EachAbility name="Bootstrap" level="1" type="type1" />
				<EachAbility name="Webpack" level="2" type="type1" />
				<EachAbility name="RESTful API" level="1" type="type1" />
				<EachAbility name="Pandas" level="2" type="type1" />
				<EachAbility name="PowerBI" level="1" type="type1" />
				<EachAbility name="Tableau" level="1" type="type1" />
        <EachAbility name="Web Development" level="3" type="type3"/>
				<EachAbility name="Data Analysis" level="2" type="type1"/>
				<EachAbility name="Data Structure" level="3" type="type1"/>
				<EachAbility name="Machine Learning" level="2" type="type1"/>
			</section>
		</div>
	)
}

export default Professional
