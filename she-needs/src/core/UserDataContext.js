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
    /**
     * A higher-order component that provides the UserDataContext to its children.
     *
     * @typedef {Object} UserDataProviderProps
     * @property {ReactNode} children - The components that should be wrapped with the UserDataContext.Provider.
     * @param {UserDataProviderProps} props - The props for the UserDataProvider component.
     * @returns {JSX.Element} - A JSX element that wraps the children with the UserDataContext.Provider.
    */

    const [userData, setUserDataState] = useState(initialUserData);

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