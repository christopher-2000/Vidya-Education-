import Home from './home.jsx';
import './css/style.css';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Navbar from './navbar.jsx';
import { FcGoogle} from 'react-icons/fc';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
    const customStyle = {
        color: "black",
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "100px",
      border: "0.1px solid gray",
      fontSize: "1em",
      transition: "transform 1s ease",
      boxShadow:"0 0 20px rgba(0,0,0,0.3)",
      height:"fit-content",
      width:"60%",
      marginLeft:"5%",
      marginRight:"5%",
      paddingLeft:"10%",
      paddingRight:"10%",
    };
    const logoutStyle = {
        border: "0.1px solid gray",
        borderRadius:"10%",
        paddingLeft:"5%",
        paddingRight:"5%",
        width:"150%",
        marginTop:"25%",
        color:"white",
        backgroundColor:"red"
    }
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [userDetails, setUser] = useState(null);
 
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setUser(res.profileObj);
        
    };

    
    
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        localStorage.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    
    return (
        <div>

            { showloginButton && (
                <div className='front center'>
                    <div className='logo'>
                    <img src={ require('./images/vidyalogo.webp') } alt="sry" style={{ marginTop:"5%" }} />
                    <h1>Vidya Education App</h1>
                    </div>
                    <br /><br />
                    <GoogleLogin
                    render={renderProps => (
                        <button onClick={renderProps.onClick} style={customStyle}>
                            <div style={{padding:"1%"}}>
                                <div style={{display:"inline",paddingRight:"3%"}}>
                                    <FcGoogle size={20} /> 
                                </div>
                                <div style={{width:"fit-content",display:"inline"}}>
                                    <div>Sign In with Google</div>
                                </div>
                            </div>
                        </button>
                      )}
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    prompt="consent"
                />
                </div>)}

            { showlogoutButton && (
                <div>
                    <Navbar button={
                        <div className='logout'>
                            
                        </div>
                    }/>
                    
                    <Home  isSuccess={showlogoutButton}/>
                </div> )
            }
        </div>
    );
}
export default Login;
