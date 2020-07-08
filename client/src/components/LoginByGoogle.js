import React, { useState } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import axios from 'axios'

const LoginByGoogle = () => {
    const [userDetails, setUserDetails] = useState({})
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [newToken, setToken] = useState(null)

    const responseGoogle = response => {
        return async () => {
            const id_token = response.getAuthResponse().id_token;
            console.log(id_token)
            try {
                await axios.post('http://localhost:8080/api/auth/google', id_token)
                .then(res => {
                    const token = res.headers.get('x-auth-token'); // need to change axios later 
                    res.json().then(user => {
                    if (token) {
                        setUserDetails(user)
                        setIsUserLoggedIn(true)
                        setToken(newToken)
                    }
                    });
                })
            } catch (err) {
                console.log(err)
            }
        } 
    }

    const logout = () => setIsUserLoggedIn(false)

    return (
        <div className="App">
            {!isUserLoggedIn && (
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_KEY}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            )}
            {isUserLoggedIn && (
                <div className="userDetails-wrapper">
                    <div className="details-wrapper">
                        <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />
                        <div className="image">
                            <img src={userDetails.imageUrl} />
                        </div>
                        <div className="name">
                            Welcome
                            {' '}
                            {userDetails.givenName}
                            {' '}
                            {userDetails.familyName}
                        </div>
                        <div className="email"><i>{userDetails.email}</i></div>
                    </div>
                    <div className="bar" />
                    <div className="stand" />
                </div>
            )}
        </div>
    )
}

export default LoginByGoogle
