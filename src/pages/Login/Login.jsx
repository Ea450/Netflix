import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { logIn, signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
    const [signState, setSignState] = useState('Sign In')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const user_auth = async (event) => {
        event.preventDefault()
        setLoading(true)
        if (signState === 'Sign In') {
            await logIn(email, password)
        } else {
            await signUp(name, email, password)
        }
        setLoading(false)
    }

    return (
        loading ? <div className="loading-spinner">
            <img src={netflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <img src={logo} alt="" className='login-img' />
                <div className="login-form">
                    <h1>{signState}</h1>
                    <form>
                        {signState === 'Sign Up' && <input type="text" placeholder='Your Name' value={name}
                            onChange={(e) => setName(e.target.value)} />}
                        <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={user_auth}>{signState}</button>
                        <div className="form-help">
                            <div className="remember">
                                <input type="checkbox" />
                                <label>Remeber Me</label>
                            </div>
                            <p>Need Help!</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {signState === 'Sign In' ?
                            <p>New To Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
                            : <p>Already Have Account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
                        }
                    </div>
                </div>
            </div>
    )
}

export default Login