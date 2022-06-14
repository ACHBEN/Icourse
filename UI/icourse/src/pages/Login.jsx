import { useState } from 'react' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./style.css"

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


        <div className='Container'>
            <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                    <span class="padding-bottom--15"><h2>Sign in to your account</h2></span><br/>
                    <form onSubmit={handleSubmit}>
                        <div class="field padding-bottom--24">
                            <input label="Username" placeholder="Jane Doe" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div class="field padding-bottom--24">
                            <input label="Password" type="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div class="field padding-bottom--24">
                            <input placeholder="Code" onChange={e => setCode(e.target.value)} />
                        </div>
                        <div class="field padding-bottom--24">
                            <input type="submit" label="Log In" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    )
}