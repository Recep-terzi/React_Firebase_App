import React,{useState} from 'react'
import { auth } from '../firebase/config'
import {useLogin} from "../hooks/useLogin"
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {error,login} = useLogin()
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }
  return (
    <div>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
            <label >
                <span>Email Adresiniz : </span>
                <input type="text" required onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label >
                <span>Parola : </span>
                <input type="text" required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>
            <button>Giriş</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default Login