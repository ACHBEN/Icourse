import { useState } from 'react' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:5001/users/login', {
            Name: username,
            Password: password,
            code: code,
        }).catch(e => alert(e.response.data.message))


        alert(response.data.message)

        navigate('/?code=' + code)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input label="password" type="password" onChange={e => setPassword(e.target.value)} />
            <input placeholder="Code" onChange={e => setCode(e.target.value)} />
            <input type="submit" label="Login" />
        </form>
            
    )
}