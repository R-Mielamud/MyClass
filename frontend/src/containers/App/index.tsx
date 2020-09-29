import React, { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../redux/store';
import Routing from '../Routing';

const App: React.FC = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/');

        socket.onopen = () => {
            console.log('Channels are working!');
        };

        socket.onerror = () => {
            console.log('Connection error');
        };
    }, []);

    return (
        <ReduxProvider store={store}>
            <NotificationContainer />
            <Routing />
        </ReduxProvider>
    );
};

export default App;
