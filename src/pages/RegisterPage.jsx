import React from 'react'
import useForm from '../hook/useForm'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
 const navigate = useNavigate()

    const { name, email, password, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: '',
    });
    const onRegister = (e) => {
        e.preventDefault()
        navigate('/dashboard', {
            replace: true,
            state: {
                logged: true,
                name
            }
        })
        
        onResetForm()

    }
    return (
        <div className="wrapper" >
            <Navbar />
            <form onSubmit={onRegister}>
                <h2>Register</h2>

                <div className='input-group'>
                    <input type='text' name='name' id='name' value={name} onChange={onInputChange} placeholder='user123' autoComplete='off' required />
                </div>
                <div className='input-group'>
                    <input type='email' name='email' id='email' value={email} onChange={onInputChange} placeholder='user@user.com' autoComplete='off' required />
                </div>
                <div className='input-group'>
                    <input type='password' name='password' id='password' value={password} onChange={onInputChange} placeholder='***' autoComplete='off' required />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage