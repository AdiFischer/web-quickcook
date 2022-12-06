import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyA2jXLKtI-EDrnGtltPjXiThAXQyJ3Qos0",
    authDomain: "web-quickcook-af.firebaseapp.com",
    projectId: "web-quickcook-af",
    storageBucket: "web-quickcook-af.appspot.com",
    messagingSenderId: "139608300553",
    appId: "1:139608300553:web:faadedc2196b5f31d8acd8"
};

export default function Signup({ setUser }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignup = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // connects to Firebase
        const auth = getAuth(app) // connects us to Firebase Auth
        const response = await createUserWithEmailAndPassword(auth, email, password)
            .catch(alert)
        setUser(response.user)
        navigate('/home')
    }
    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="email">Email:{' '}
                    <input type="email" name="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password">Password:{' '}
                    <input type="password" name="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="•••••••" />
                </label><br />
                <button type="submit">Signup</button>
            </form>
        </>
    )
}