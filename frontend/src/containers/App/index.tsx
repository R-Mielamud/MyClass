import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../redux/store';
import { Router } from 'react-router';
import history from '../../helpers/history.helper';

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <Router history={history}>
                <Routing />
            </Router>
        </ReduxProvider>
    );
};

export default App;
