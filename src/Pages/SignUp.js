import React,{useState} from 'react'
import { useSignUp } from '../hooks/useSignUp'
const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error,signup} = useSignUp()
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email,password);
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        <h2>Üye Ol</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email Adresiniz : </span>
                <input type="text" required onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Password : </span>
                <input type="text" required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>
            <button>Üye Ol</button>
            {
                error && <p>{error}</p>
            }
        </form>
    </div>
  )
}

export default SignUp