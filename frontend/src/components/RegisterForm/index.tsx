import React, { useState } from 'react';
import { Form, Button, Popup } from 'semantic-ui-react';
import { Register } from '../../containers/LoginPage/logic/actionTypes';
import PasswordInput from '../common/PasswordInput';
import validator from 'validator';

interface Props {
    onSubmit: (data: Register) => void;
    loading: boolean;
}

const RegisterForm: React.FC<Props> = ({ onSubmit, loading }) => {
    const [email, setEmailText] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(true);
    const [firstName, setFirstNameText] = useState<string>('');
    const [lastName, setLastNameText] = useState<string>('');
    const [firstNameValid, setFirstNameValid] = useState<boolean>(true);
    const [lastNameValid, setLastNameValid] = useState<boolean>(true);

    const setEmail = (value: string) => {
        setEmailText(value);
        setEmailValid(true);
    };

    const setFirstName = (value: string) => {
        setFirstNameText(value);
        setFirstNameValid(true);
    };

    const setLastName = (value: string) => {
        setLastNameText(value);
        setLastNameValid(true);
    };

    const buttonDisabled = !Boolean(password && email && passwordValid && emailValid && firstName && lastName);

    const submit = () => {
        if (buttonDisabled) return;
        onSubmit({ email, password, first_name: firstName, last_name: lastName });
    };

    return (
        <Form onSubmit={submit}>
            <Popup
                on={[]}
                open={!firstNameValid}
                content="First name is required"
                trigger={
                    <Form.Input
                        fluid
                        icon="user"
                        value={firstName}
                        placeholder="First name"
                        onChange={(event, data) => setFirstName(data.value)}
                        onBlur={() => setFirstNameValid(Boolean(firstName))}
                        error={!firstNameValid}
                    />
                }
            />
            <Popup
                on={[]}
                open={!lastNameValid}
                content="Last name is required"
                trigger={
                    <Form.Input
                        fluid
                        icon="user"
                        value={lastName}
                        placeholder="Last name"
                        onChange={(event, data) => setLastName(data.value)}
                        onBlur={() => setLastNameValid(Boolean(lastName))}
                        error={!lastNameValid}
                    />
                }
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
            <Button type="submit" primary fluid disabled={buttonDisabled} loading={loading}>
                Sign up
            </Button>
        </Form>
    );
};

export default RegisterForm;
