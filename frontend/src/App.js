import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getNames();
    }, []);

    const getNames = async () => {
        try {
            const response = await axios.get('http://localhost:8000/names');
            console.log(response); // Assurez-vous que la réponse contient ce que vous attendez
            setUserName(response.data); // Mettez à jour l'état avec les données reçues
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des noms :', error);
        }
    };

    return (
        <div>
            <h1>My frontend</h1>
            <p>Username: {userName}</p>
        </div>
    );
}

export default App;
