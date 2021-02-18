import React, { useState, useEffect } from 'react';
import getUser from './helpers/getUser';

const initialUser = {
    name: "Regulus",
    email: "regulus@mail.com",
}

function FetchCard() {
    const [user, setUser] = useState(initialUser);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    useEffect( () => {
        updateUser();
    }, [])

    return (
        <div>
            <button onClick={updateUser}>
                Another User
            </button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default FetchCard
