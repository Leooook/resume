import React, { Component } from 'react'

import Project from './Project.js'
import Title from './Title'

function EachProject({ link1, link2, name, info, extras, tag }) {
	const handle = () => {
		const newPage = window.open('about:blank')
		newPage.location.href = link1
	}

	return (
		<div>
			<div className="eachProject">
				<div className={`projectPhoto ${name}`} onClick={() => handle()} />
				<div className="project">
					<div className="smallTitle">{name}</div>
					<div className="font">{info}</div>
					<br />
					<ul className="font">
						{extras.map((eachExtra, index) => (
							<li key={index} className="fontList">
								{eachExtra}
							</li>
						))}
					</ul>
					<p className="font fontList">
						For more details please visit&nbsp;
						<a className="fontLink" href={link1} target="view_window">
							website
						</a>
						&nbsp; & &nbsp;
						<a className="fontLink" href={link2} target="view_window">
							github
						</a>.
					</p>
					<div className="tags">
						{tag.map((eachTag, index) => (
							<div key={index} className={`tag ${eachTag}`}>
								{eachTag}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="projectSector" />
		</div>
	)
}

class Portfolio extends Component {
	render() {
		return (
			<div id="portfolio" className="portfolio">
				<Title title="PORTFOLIO" num="02" info="THERE ARE MY LATEST PROJECTS." />
				<div className="portfolioSection">
					{Project.map((eachProject, index) => (
						<EachProject
							key={index}
							link={eachProject['link']}
							name={eachProject['name']}
							info={eachProject['info']}
							extras={eachProject['extras']}
							tag={eachProject['tag']}
						/>
					))}
					<div className="projectSector1" />
				</div>
			</div>
		)
	}
}

export default Portfolio
