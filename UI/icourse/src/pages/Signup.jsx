import { useState } from 'react';
import axios from 'axios';


export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5001/users', {
                Name: username,
                Password: password
            });
            alert(response.data.message)
        } catch(e) {
            console.info('ERROR: ', e);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input label="Username" placeholder="Jane Doe" onChange={e => setUsername(e.target.value)} />
            <input label="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <input type="submit" label="Signup" />
        </form>
        
    )
}