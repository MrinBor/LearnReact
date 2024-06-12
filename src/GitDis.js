import React, { useEffect, useState } from 'react';
import './GitDis.css'; // Make sure to import your CSS file

const url = "https://api.github.com/users";

function GitDis() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            setUsers(users);
        } catch (error) {
            console.error('Fetch error:', error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching users</div>;
    }

    return (
        <>
            <div style={{ color: "black", border: "12px solid blue", padding: "24px", backgroundColor: '#f0f8ff', height: "122px", borderRadius: "25px", margin: "12px" }}>
                <h1>Hello | Api Fetch Functionality Checking</h1>
            </div>

            <ul className='disp'>
                {
                    users.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        return (
                            <li key={id} style={{ listStyleType: 'none', margin: '20px 0', padding: '10px', backgroundColor: 'violet', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                                <img src={avatar_url} alt={login} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: '10px' }} />
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0' }}>{login}</h4>
                                    <a href={html_url} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Profile</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default GitDis;
