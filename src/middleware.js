import { addNotification } from './actions';

// Check if a dispatched action has a "notification" key.
// In case it does, dispatch an notification anction to the
// notifications reducer

var middlewareTest = store => next => action => {
	
	if ('notification' in action) {
		store.dispatch(addNotification(action.notification));
	}
	
	return next(action);
};

export default middlewareTest;
