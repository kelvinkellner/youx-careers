import React from 'react';
import { AppContext } from './components/Store';

const { getAppStateItem, setAppStateItem } = React.useContext(AppContext);

const count = getAppStateItem('count');

export default {
    count: () => getAppStateItem('count'),
    getUser: () => ({
        name: getAppStateItem('name'),
        email: getAppStateItem('email'),
        password: getAppStateItem('password')
    }),
    setUser: (name, email, password) => {setAppStateItem(name), setAppStateItem(email), setAppStateItem(password)}
}