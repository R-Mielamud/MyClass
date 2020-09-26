import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner: React.FC = () => {
    return (
        <Dimmer active inverted>
            <Loader size="massive" content="Loading..." />
        </Dimmer>
    );
};

export default Spinner;
