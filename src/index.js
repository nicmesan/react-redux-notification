import notificationsReducer from './reducer';
import * as actions from './actions';
import Notifications from './components/notifications_container';
import notificationsMiddleware from './middleware';

export {
    Notifications,
    actions,
    notificationsReducer,
    notificationsMiddleware,
  // style,
};