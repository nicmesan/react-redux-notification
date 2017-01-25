import { CLEAR_SINGLE_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS, ADD_NOTIFICATION } from './constants';

export function clearSingleNotification (notificationId) {
	return {
		type: CLEAR_SINGLE_NOTIFICATION,
		payload: notificationId,
	}
}

export function clearAllNotifications () {
	return {
		type: CLEAR_ALL_NOTIFICATIONS,
	}
}

export function addNotification (notification) {
	return {
		type: ADD_NOTIFICATION,
		payload: notification,
	}
}
