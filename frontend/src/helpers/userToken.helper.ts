import { LocalStorageKeys } from '../constants/LocalStorageKeys';

export const getToken = () => {
    return localStorage.getItem(LocalStorageKeys.UserToken);
};

export const setToken = (value: string) => {
    return localStorage.setItem(LocalStorageKeys.UserToken, value);
};

export const removeToken = () => {
    return localStorage.removeItem(LocalStorageKeys.UserToken);
};
