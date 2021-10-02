import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    debugger;
    const googleresponse = {
        Name: response.profileObj.name,
        email: response.profileObj.email,
        token: response.googleId,
        Image: response.profileObj.imageUrl,
        ProviderId: 'Google'
    };
    if (response.error)
        return 
    console.log(response);
    console.log(googleresponse);
}
const logout = (response) => {
    debugger;
    console.log(response);
}
const LoginWithGoogle = () => {
    return (
        <>
            <GoogleLogin
                clientId="862165371432-5rtn2vdjf7704ap0qb7kpvcdmmlsi9hl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <GoogleLogout
                clientId="862165371432-5rtn2vdjf7704ap0qb7kpvcdmmlsi9hl.apps.googleusercontent.com"
                buttonText="Logout"
                className="btn btn-danger"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
        </>
    )
  };
  
  export default LoginWithGoogle;