import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        // Fetch the registered name and email from the database
        // and set the initial values of name and email state variables
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user');
                const userData = await response.json();
                setName(userData.name);
                setEmail(userData.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleUpdate = async () => {
        try {
            // Send a PUT request to update the username and email in the database
            const response = await fetch('/api/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                }),
            });

            if (response.ok) {
                // Update the name and email state variables with the new values
                setName(newName);
                setEmail(newEmail);
                setNewName('');
                setNewEmail('');
            } else {
                console.error('Failed to update user data');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <input
                type="text"
                placeholder="New Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <input
                type="email"
                placeholder="New Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Dashboard;
