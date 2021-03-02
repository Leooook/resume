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

				<EachAbility name="ReactJS" level="3" type='type1'/>
				<EachAbility name="React-Redux" level="5" />
				<EachAbility name="JQuery" level="75" />
				<EachAbility name="Bootstrap" level="65" />
				<EachAbility name="Webpack" level="45" />

				<EachAbility name="Jinja2" level="45" />
				<EachAbility name="Contentful" level="75" />
				<EachAbility name="Git" level="65" />
				<EachAbility name="MySQL" level="45" />
			</section>
		</div>
	)
}

export default Professional
