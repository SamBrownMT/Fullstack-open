import React from 'react'

const Notification = ( {message} ) => {
	if (message === null) {
		return null
	}

	const messageStyle = {
		color: 'green',
		fontStyle: 'bold',
		fontSize: 22
	}

	return (
		<div style={messageStyle}>
			{message}
		</div>
	)
}

export default Notification