import React from 'react'
import PropTypes from 'prop-types'

function Title({ title, num, info }) {
	return (
		<div>
			<h1 className="title">
				<span className="titleNum">{num} </span>
				{title}
			</h1>
			<p className="info">{info}</p>
			<div className="line" />
		</div>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	num: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired
}

export default Title
