import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import H5 from "./H5";
import Button from './Button';
import Input from "./Input";
import ShowHidePassword from "./Show-hide-password";
import Form from "./Form";

export default function TeacherLoginForm() {
    const navigate = useNavigate();
    const [isTypePassword, setPasswordToText] = useState('password');

    const [teacherUsername, setTeacherUsername] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');

    const handleTeacherUsername = (event) => {
        setTeacherUsername(event.target.value);
    }

    const handleTeacherPassword = (event) => {
        setTeacherPassword(event.target.value);
    }

    function handleClick() {
        setPasswordToText(isTypePassword === 'password' ? 'text' : 'password');
    }

    const handleTeacherSubmit = (res) => {
        navigate('/teacher/', {replace: true});
        res.preventDefault();
    }

    return (
        <Form onSubmit={handleTeacherSubmit}>
            <Input 
                id="teacherUsername"
                type="text" 
                placeholder="Teacher Username"
                name="Teacher-Username" 
                required 
                autoComplete="off"
                onChange={handleTeacherUsername}
                value={teacherUsername}
            />
            <Input 
                id="teacherPassword"
                type={isTypePassword} 
                placeholder="Teacher Password"
                name="Teacher-Password"  
                onChange={handleTeacherPassword} 
                required 
                value={teacherPassword}
            />
            <ShowHidePassword 
                forId="teacherShowHide"
                id="teacherShowHide"
                type="checkbox" 
                placeholder="Show / Hide Password" 
                name="teacherShowHide" 
                label={isTypePassword === 'password' ? 'Show Password' : 'Hide Password'}
                onChange={handleClick} 
            />
            <H5 text="Kindly contact your administrator, if you are not yet registered as a teacher." />
            <Button text="Login" type="submit" name="login" />
        </Form>
    )
}