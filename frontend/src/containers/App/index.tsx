import React, { useEffect, useState } from 'react';
import getUsername from '../../helpers/getUsername';
import { getProfile } from '../../services/auth.service';

const App: React.FC = () => {
    const [user, setUser] = useState<WebApi.Entity.User | null>(null);
    const [mustFetchUser, setMustFetchUser] = useState<boolean>(true);

    useEffect(() => {
        if (mustFetchUser) {
            setMustFetchUser(false);
            getProfile().then(setUser);
        }
    }, [mustFetchUser]);

    let username: string;

    if (!user) {
        if (mustFetchUser) return null;
        username = 'Anonymous';
    } else {
        username = getUsername(user);
    }

    return <div>Dear {username}, welcome to MyClass!</div>;
};

export default App;
