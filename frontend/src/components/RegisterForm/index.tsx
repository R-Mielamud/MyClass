import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Register } from '../../containers/LoginPage/logic/actionTypes';
import PasswordInput from '../common/PasswordInput';
import validator from 'validator';

interface Props {
    onSubmit: (data: Register) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
    const [email, setEmailText] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(true);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

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
                icon="user"
                value={firstName}
                placeholder="First name"
                onChange={(event, data) => setFirstName(data.value)}
            />
            <Form.Input
                fluid
                icon="user"
                value={lastName}
                placeholder="Last name"
                onChange={(event, data) => setLastName(data.value)}
            />
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
            <Form.Button type="submit" primary fluid disabled={buttonDisabled}>
                Sign up
            </Form.Button>
        </Form>
    );
};

export default RegisterForm;
