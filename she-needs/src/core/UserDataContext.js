import React, { createContext, useState } from 'react';

const initialUserData = {
    name: '',
    phone: '',
    theme: {}
    ,
};

export const UserDataContext = createContext({
    /**
     * A context object for sharing user data and a function to update it.
     *
     * @typedef {Object} UserDataContext
     * @property {Object} userData - The current user data.
     * @property {Function} setUserData - A function to update the user data.
     * @type {UserDataContext}
     */

    userData: initialUserData,
    setUserData: () => { },
});

export const UserDataProvider = ({ children }) => {
    const [userData, setUserDataState] = useState(initialUserData);

    log.console(userData)

    const setUserData = (data) => {
        setUserDataState((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};