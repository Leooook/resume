import React from 'react'

import Title from './Title'

function EachAbility({ name, level }) {
	return (
		<div className="eachAbility">
			<div className="font"> {name}</div>
			<div className="levelBlock">
				<div className={`length l${level}`} />
				<div className="font"> {level} / 5 </div>
			</div>
		</div>
	)
}

function Professional(props) {
	return (
		<div id="professional" className="professional">
			<Title title="PROFESSIONAL" num="03" info="IT'S MY SKILLS SUMMARY." />
			<section className="professionalSection">
				<EachAbility name="HTML5" level="5" />
				<EachAbility name="CSS3.0" level="5" />
				<EachAbility name="JavaScript" level="5" />
        <EachAbility name="Python" level="5" />
				<EachAbility name="C" level="3" />
				<EachAbility name="C++" level="65" />
        <EachAbility name="NodeJS" level="45" />
				<EachAbility name="Perl" level="65" />

				<EachAbility name="ReactJS" level="5" />
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