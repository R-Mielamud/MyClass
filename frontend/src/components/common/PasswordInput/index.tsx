import React, { useState } from 'react';
import { Form, Icon, Popup } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

interface Props {
    error: boolean;
    value: string;
    setValue: (value: string) => void;
    setIsValid: (isValid: boolean) => void;
}

const PasswordInput: React.FC<Props> = ({ error, value, setValue, setIsValid }) => {
    const [isSecure, setIsSecure] = useState<boolean>(true);
    const icon: SemanticICONS = isSecure ? 'eye' : 'eye slash';
    const iconEl = <Icon name={icon} link onClick={() => setIsSecure(!isSecure)} />;
    const type: string = isSecure ? 'password' : 'text';

    const setPassword = (value: string) => {
        setValue(value);
        setIsValid(true);
    };

    return (
        <Popup
            on={[]}
            open={error}
            content="Password length must be at least 6 characters"
            trigger={
                <Form.Input
                    type={type}
                    icon={iconEl}
                    value={value}
                    error={error}
                    placeholder="Password"
                    onChange={(event, data) => setPassword(data.value)}
                    onBlur={() => setIsValid(Boolean(value) && value.length >= 6)}
                />
            }
        />
    );
};

export default PasswordInput;
