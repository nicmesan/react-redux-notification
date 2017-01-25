import { CLEAR_SINGLE_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS, ADD_NOTIFICATION } from './constants';

const initialState = {
	notifications: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return Object.assign({}, state, checkForNotificationStack(action.payload, state));
		case CLEAR_SINGLE_NOTIFICATION:
			return Object.assign({}, state, {
				notifications: deleteSingleNotification(state.notifications, action.payload),
			});
		case CLEAR_ALL_NOTIFICATIONS:
			return Object.assign({}, state, { notifications: [] });
		default:
			return state;
	}
}

function checkForNotificationStack (notification, state) {

/**
 * check if notification of the same type exist,
 * in case it does and should be unique, it should replace it
 * otherwise just add the notification to the stack
 */
	var date= new Date().getTime();

	notification.id = date;
	
	if (notification.unique) {

		var newNotificationsStack =	state.notifications.filter(function (oldNotification) {
			return oldNotification.type !== notification.type;
		});
		
		newNotificationsStack.push(notification);
		
		return ({
			notifications: newNotificationsStack,
		});

	}
	
	return {
		notifications: [...state.notifications, notification],
	};
}

function deleteSingleNotification (notifications, notificationId) {
	var noti = [];
	noti.push(notificationId);

	var array3 = notifications.filter(function(obj) {return noti.indexOf(obj.id) == -1; });

	return array3;
}
