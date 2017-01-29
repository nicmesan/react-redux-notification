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
		}, this.props.duration);

		
	}

	componentWillMount() {

	}

	// Remove notification from reducer

	clearNotification (notificationId) {
		
		this.props.clearNotification(notificationId);
	}

	render () {
		return (
			<div className={`notification ${this.props.className}`}>
				<div className="notification-close-button" onClick={this.clearNotification}>
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
	unique: React.PropTypes.bool,
	className: React.PropTypes.string,
	notificationId: React.PropTypes.string,
	clearNotifications: React.PropTypes.func,
	duration: React.PropTypes.number
};
