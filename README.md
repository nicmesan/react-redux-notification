# react-redux-notifications
The simplest way to implement a notiffication system in your React-Redux app

## Installation

```
npm install --save react-redux-notifications
```

# Getting started

### CSS

#### Webpack:
```js
import 'react-redux-notifications/src/styles/notifications.css';
```

#### Other
```html
<link rel="stylesheet" type="text/css" href="path/to/notifications.css">
```

### Middleware

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './my_app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {notificationsMiddleware} from 'react-redux-notifications'
import rootReducer from './my_reducer';

const store = createStore(
    rootReducer,
	applyMiddleware(notificationsMiddleware),

	);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector('.container'));
```
### Reducer

```js
import { combineReducers } from 'redux';
import { notificationsReducer } from '../src'

const rootReducer = combineReducers({
    notificationsReducer,
});

export default rootReducer;
```
# Using the library

### Notifications container

First, add the notifications container in your main component:

```js
import React, { Component } from 'react';
import { Notifications } from 'reat-redux-notifications'

class MainComponent extends Component {
  render () {
    return (
      <div>
        //.....
        <Notifications duration={1000}/>
      </div>
    )
}
//...
```
## Notification container Props

| Name | Type | Default | Required |
|------|------|---------|----------|
| duration | number | 3000 | false |

- duration: Time in ms each single notification will be rendered before disappearing 

### Actions

## Adding a single notification

You can add a notification calling the addNotification action:

```js
import React, { Component } from 'react';
import { Notifications } from 'reat-redux-notifications';
import { addNotification } from 'reat-redux-notifications/actions';

class MainComponent extends Component {
  
  addNotification () {
    const notificationPayload = {
            text: 'A notification Message',
        };
        
    this.props.addNotification(notificationPayload)
 }
 
  render () {
    return (
      <div>
        <button onClick={this.addNotification.bind(this)}
        //.....
        <Notifications duration={1000}/>
      </div>
    )
}
//...
```

Or just add the notifiaction key to any other action you are dispatching, and the library middleware will take care of the rest:

```js
// Some random action in your app

exports function doSomeStuff () {
  type: 'doSomeStuff',
  notification: {
    text: 'Stuff done'
}
```

## Single notification Props

| Name | Type | Default | Required |
|------|------|---------|----------|
| message | string | None | true |
| className | string | Default styles | false |
| unique | boolean | false | false |
| type | string | None | false |

- message: Text message to be rendered.
- className: Class name to be applied to this specific notification. The library comes with an error class to render error like notifications. 
- unique: If true, it will check if a notification of the same "type" exists and if it does, will replace it instead of stacking it.
- type: Related to the unique props, group related notifications of the same type if you don't want them to stack.


## Clearing all notifications

Call clearAllNotifications action to clear all current notifications:

```js
import React, { Component } from 'react';
import { Notifications } from 'reat-redux-notifications';
import { clearAllNotifications } from 'reat-redux-notifications/actions';

class MainComponent extends Component {
  
  clearAllNotifications () {
    this.props.clearAllNotifications()
 }
 
  render () {
    return (
      <div>
        <button onClick={this.clearAllNotifications.bind(this)}
        //.....
        <Notifications duration={1000}/>
      </div>
    )
}
//...
```

### Demo

Check the demo folder for an example
