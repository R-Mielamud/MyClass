import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../redux/store';
import Routing from '../Routing';

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <Routing />
        </ReduxProvider>
    );
};

export default App;
