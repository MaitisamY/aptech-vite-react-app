import { useState } from "react";
import H1 from "./H1";
import Button from './Button';
import Tabs from "./Tabs";
import StudentLoginForm from "./StudentLoginForm";
import TeacherLoginForm from "./TeacherLoginForm";
import AdminLoginForm from "./AdminLoginForm";
import Footer from "./Footer";
import Header from "./Header";
import Div from "./Div";

export default function Content() {
    const [activeTab, setActiveTab] = useState('student'); // Set 'student' as the default active tab
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <>
            <Header />
            <main>
                <Div className="content">
                    <H1 text="Login" />
                    <Tabs 
                        className="list-items" 
                            buttons={
                            <ul>
                                <li>
                                    <Button
                                        id="btnStudent"
                                        className={activeTab === 'student' ? 'active' : ''}
                                        text="Student"
                                        type="button"
                                        onClick={() => handleTabClick('student')}
                                    />
                                </li>
                                <li>
                                    <Button
                                        id="btnTeacher"
                                        className={activeTab === 'teacher' ? 'active' : ''}
                                        text="Teacher"
                                        type="button"
                                        onClick={() => handleTabClick('teacher')}
                                    />
                                </li>
                                <li>
                                    <Button
                                        id="btnAdmin"
                                        className={activeTab === 'admin' ? 'active' : ''}
                                        text="Admin"
                                        type="button"
                                        onClick={() => handleTabClick('admin')}
                                    />
                                </li>
                            </ul>
                        }
                    />
                    {activeTab === 'student' ?
                        <StudentLoginForm />
                        : activeTab === 'teacher' ?
                        <TeacherLoginForm /> 
                        : activeTab === 'admin' ?
                        <AdminLoginForm />
                        : null}
                </Div>
            </main>
            <Footer />
        </>
    )
}