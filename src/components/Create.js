import React from 'react';
import { AppContext } from './Store';

export const Create = () => {
    const { setAppStateItem } = React.useContext(AppContext);

    setAppStateItem('name', null);
    setAppStateItem('email', null);
    setAppStateItem('password', null);

    setAppStateItem('pins', []);
    setAppStateItem('quizHistory', []);
    setAppStateItem('quizTemp', null);
    setAppStateItem('jobTemp', null);
}