import React, { useRef } from 'react'
import api from '../services/axiosData'


function Register({setToken}) {
    
    const inputUsername = useRef(null)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    
    const onRegister = (e) => {
        e.preventDefault()
        api.post('/register/', {
            username: inputUsername.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value
        }).then((res) => {
            console.log('Response: ', res)
            window.localStorage.setItem('access_token', res.data.access)
            setToken(res.data.access)
        })
          .catch((error) => console.log('Error: ', error))
    }


    return (
        <div className='container mx-auto w-100 mt-5 mb-2'>
            <div className="card">
                <div className="card-header">
                    <h2>Register page</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={onRegister}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUserName" className="form-label">Username</label>
                            <input ref={inputUsername} type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                            <input ref={inputEmail} type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                            <input ref={inputPassword} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success form-control">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
