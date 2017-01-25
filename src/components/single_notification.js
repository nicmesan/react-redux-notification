import React, { Component } from 'react';

export default class Notification extends Component {
	constructor () {
		super();
		this.clearNotification = this.clearNotification.bind(this)
		this.pregunta = false;
	
	} 

	// Remove notification after timeout

	componentDidMount() {

			setTimeout(() => {

		   this.props.clearNotification(this.props.notificationId);
		}, 3000);

		
	}

	componentWillMount() {

	}

	// Remove notification from reducer

	clearNotification (notificationId) {
		
		this.props.clearNotification(notificationId);
	}

	render () {

		const notificationStyles = {
			color: 'white',
			fontWeight: 600,
			padding: '16px 0 16px 0',
			position: 'relative',
			margin: '.3rem auto 0 auto',
			textAlign: 'center',
			width: '80%',
			borderRadius: '0.5rem',
			overflow: 'hidden',
			animation: 'fadeOut 5s 1',
			animationFillMode: 'forwards',
			cursor: 'pointer',
			backgroundColor: 'rgba(152, 5, 19, 0.8)',
		};
		
		const closeButtonStyle = {
			position: 'absolute',
			right: 2,
			top: 2,
		};
		return (
			<div className="notification" style={notificationStyles}>
				<div className="notificationCloseButton" style={closeButtonStyle} onClick={this.clearNotification}>
					<i className="material-icons">close</i>
				</div>
				{this.props.message}
			</div>
		)
	}
};

Notification.protoTypes = {
	message: React.PropTypes.string.isRequired,
	type: React.PropTypes.string,
	notificationId: React.PropTypes.string,
	clearNotifications: React.PropTypes.func,
	duration: React.PropTypes.number
};
