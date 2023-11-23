import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import H5 from "./H5";
import Button from './Button';
import Input from "./Input";
import ShowHidePassword from "./Show-hide-password";
import Form from "./Form";
import Div from "./Div";

export default function AdminLoginForm() {
    const navigate = useNavigate();
    const [isTypePassword, setPasswordToText] = useState('password');

    const [adminUsername, setAdminUsername] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAdminUsername = (event) => {
        setAdminUsername(event.target.value);
    }

    const handleAdminPassword = (event) => {
        setAdminPassword(event.target.value);
    }

    function handleClick() {
        setPasswordToText(isTypePassword === 'password' ? 'text' : 'password');
    }

    // const handleAdminSubmit = (res) => {
    //     navigate('/student/', {replace: true});
    //     res.preventDefault();
    // }

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        
        setIsLoading(true);
        setErrorMessage(null);
        try {
          const response = await axios.post('http://localhost:3001/login', { username: adminUsername, password: adminPassword }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          console.log(response.data); // You can handle success or failure here
    
          // Example: Redirect to a new page upon successful login
          navigate('/admin');
        } catch (error) {
          console.error('Error during login:', error);
          // Handle the error as needed (show a message, etc.)
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Server responded with:', error.response.data);
            // Set the error message to display to the user
            setErrorMessage(error.response.data.error || 'Wrong Login Credentials');
          } else if (error.request) {
            // The request was made but no response was received
            console.log('No response received from the server');
            // Set the error message to display to the user
            setErrorMessage('Username or Password does not match');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
            // Set the error message to display to the user
            setErrorMessage('Issue from our side. Sorry!');
          }
        } finally {
            // Set loading to false regardless of success or failure
            setIsLoading(false);
        }
    };

    return (
        <Form onSubmit={handleAdminSubmit}>
            <Input 
                id="adminUsername"
                type="text" 
                placeholder="Admin Username"
                name="username" 
                required 
                autoComplete="off"
                onChange={handleAdminUsername}
                value={adminUsername}
            />
            <Input 
                id="adminPassword"
                type={isTypePassword} 
                placeholder="Admin Password"
                name="password"  
                onChange={handleAdminPassword} 
                required 
                value={adminPassword}
            />
            <ShowHidePassword 
                forId="adminShowHide"
                id="adminShowHide"
                type="checkbox" 
                placeholder="Show / Hide Password" 
                name="adminShowHide" 
                label={isTypePassword === 'password' ? 'Show Password' : 'Hide Password'}
                onChange={handleClick} 
            />
            <H5 text="Kindly contact one of your administrators, if you are not yet registered as an admin." />
            <Button text="Login" type="submit" name="login" /> 
            {isLoading && <span style={{ textAlign: 'center', display: 'flex', placeContent: 'center', marginBottom: '20px'}}>
                <img width="50" height="50" src="images/loader.gif" alt="loading"/></span>}    
            {errorMessage && <Div className="message">{errorMessage}</Div>}
        </Form>
    )
}