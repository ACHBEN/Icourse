import { useState } from 'react';
import axios from 'axios';
import "./style.css"



export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        <div className="Container">
            <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                    <span class="padding-bottom--15"><h2>Create an account</h2></span><br/>
                    <form onSubmit={handleSubmit}>
                        <div class="field padding-bottom--24">
                            <input label="Username" placeholder="Jane Doe" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div class="field padding-bottom--24">
                            <input label="Password" type="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div class="field padding-bottom--24">
                            <input type="submit" label="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
    )
}