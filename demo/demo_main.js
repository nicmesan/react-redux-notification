import React, { Component } from 'react';
import { Notifications } from '../src';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../src'

class DemoMain extends Component {
    constructor(){
        super();

        this.dispatchNotification = this.dispatchNotification.bind(this)
    }

    dispatchNotification (position) {
        const notificationPayload = {
            text: 'A notification Message',
        };

        this.props.addNotification(notificationPayload)
    }

	render () {
		return (
                <div>
                    <div onClick={this.dispatchNotification}>Show notifications Top</div>
                    <div>Show notifications Right</div>
                    <div>Show notifications Bottom</div>
                    <div>Show notifications Left</div>
                    <Notifications />
                </div>
			)
	}
}

function mapDispatchToProps (dispatch) {
    const addNotification = actions.addNotification;
    return bindActionCreators({ addNotification }, dispatch);
}

export default connect(null, mapDispatchToProps)(DemoMain);