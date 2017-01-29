import React, { Component } from 'react';
import { clearSingleNotification } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Notification from './single_notification';


class Notifications extends Component {

	renderNotifications () {
		return this.props.notifications.map((notification, index) => {

			return (
				<Notification
					key={notification.id}
					message={notification.message}
					className={notification.message}
					style={notification.style}
					clearNotification={this.props.clearSingleNotification}
					notificationId={notification.id}
					duration={notification.duration || this.props.duration}
				/>
			); 
		});
	}

	render () {
		
		const notificationContainerStyle = {
			position: 'fixed',
			bottom: 0,
			marginLeft: 'auto',
			marginRight: 'auto',
			left: 0,
			right: 0,
		};
		
		return (
			<div style={notificationContainerStyle}>
				{this.renderNotifications()}
			</div>
		);
	}
}

Notifications.defaultProps = {
	duration: 3000,
};

Notifications.propTypes = {
	duration: React.PropTypes.number,
};

function mapStateToProps (state) {
	return { notifications: state.notificationsReducer.notifications };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ clearSingleNotification }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
