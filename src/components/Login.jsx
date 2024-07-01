import React, { useEffect, useRef } from 'react'
import api from '../services/axiosData'


function Login({setToken}) {

    const inputUsername = useRef(null)
    const inputPassword = useRef(null)

    const onLogin = (e) => {
        e.preventDefault()

        api.post('/token/', {
            username: inputUsername.current.value,
            password: inputPassword.current.value
        })
        .then((res) => {
            console.log('Response: ', res)
            window.localStorage.setItem('access_token', res.data.access)
            setToken(res.data.access)
        })
        .catch((error) => console.log('Error: ', error))

    }

    return (
        <div className='container mx-auto w-100 mt-5'>
            <div className="card">
                <div className="card-header">
                    <h2>Login page</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={onLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input ref={inputUsername} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={inputPassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
