import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { LogIn } from '../../containers/LoginPage/logic/actionTypes';
import PasswordInput from '../common/PasswordInput';
import validator from 'validator';

interface Props {
    onSubmit: (data: LogIn) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
    const [email, setEmailText] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(true);

    const setEmail = (value: string) => {
        setEmailText(value);
        setEmailValid(true);
    };

    const buttonDisabled = !Boolean(password && email && passwordValid && emailValid);

    const submit = () => {
        if (buttonDisabled) return;
        onSubmit({ email, password });
    };

    return (
        <Form onSubmit={submit}>
            <Form.Input
                fluid
                icon="at"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event, data) => setEmail(data.value)}
                onBlur={() => setEmailValid(validator.isEmail(email))}
                error={!emailValid}
            />
            <PasswordInput
                value={password}
                error={!passwordValid}
                setValue={setPassword}
                setIsValid={setPasswordValid}
            />
            <Button type="submit" primary fluid disabled={buttonDisabled}>
                Log in
            </Button>
        </Form>
    );
};

export default LoginForm;
