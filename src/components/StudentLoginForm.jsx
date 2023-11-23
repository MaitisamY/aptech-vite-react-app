import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import H5 from "./H5";
import Button from './Button';
import Input from "./Input";
import ShowHidePassword from "./Show-hide-password";
import Form from "./Form";

export default function StudentLoginForm() {
    const navigate = useNavigate();
    const [isTypePassword, setPasswordToText] = useState('password'); // Set type as 'password' by default OR text if user clicks on show
    
    const [studentUsername, setStudentUsername] = useState('');
    const [studentPassword, setStudentPassword] = useState('');

    const handleStudentUsername = (event) => {
        setStudentUsername(event.target.value);
    }
    
    const handleStudentPassword = (event) => {
        setStudentPassword(event.target.value);
    }

    function handleClick() {
        setPasswordToText(isTypePassword === 'password' ? 'text' : 'password');
    }

    function handleStudentSubmit(res) {
        navigate('/student/', {replace: true});
        res.preventDefault();
    }

    return (
        <Form onSubmit={handleStudentSubmit}>
            <Input 
                id="studentUsername"
                type="text" 
                placeholder="Student Username"
                name="Student-Username" 
                required 
                autoComplete="off"
                onChange={handleStudentUsername}
                value={studentUsername}
            />
            <Input 
                id="studentPassword"
                type={isTypePassword} 
                placeholder="Student Password"
                name="Student-Password"  
                onChange={handleStudentPassword} 
                required 
                value={studentPassword}
            />
            <ShowHidePassword 
                forId="studentShowHide"
                id="studentShowHide"
                type="checkbox" 
                placeholder="Show / Hide Password" 
                name="showHidePassword" 
                label={isTypePassword === 'password' ? 'Show Password' : 'Hide Password'}
                onChange={handleClick} 
            />
            <H5 text="Kindly contact your teacher or administrator, if you are not yet registered." />
            <Button text="Login" type="submit" name="login" />
        </Form>
    )
}