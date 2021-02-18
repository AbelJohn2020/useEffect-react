import React, { useState, useEffect, useCallback } from 'react';
import getPost from './helpers/getPost';
import getUser from './helpers/getUser';

// const initialUser = {
//     name: "Regulus",
//     email: "regulus@mail.com",
// };

// const initialPost = [
//     {
//         id: 1,
//         title: "Medicim",
//         developer: "full stack",
//     },

//     {
//         id: 2,
//         title: "Food",
//         developer: "Fron end",
//     },
// ]

function FetchCard() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    const updatePost = useCallback(() => {
        getPost(user.id)
            .then((newPosts) => {
                setPosts(newPosts);
            } )
    }, [user.id]);

    useEffect( () => {
        updateUser();
    }, []);

    useEffect( () => {
        if (user?.id) {
            updatePost();
        }
    }, [user, updatePost]);

    return (
        <div>
            <button onClick={updateUser}>
                Another User
            </button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>

            <br />

            <h2>Posts - user: {user.id}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchCard
