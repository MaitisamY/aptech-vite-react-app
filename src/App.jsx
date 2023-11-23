import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from "./components/Content";
import Student from "./student/Dashboard";
import Teacher from "./teacher/Dashboard";
import Admin from "./admin/Dashboard";
import './App.css';

export default function App() {
      useEffect(() => {
        localStorage.clear();
      }, []);
    return (
        <Router>
            <Routes>
                <Route path="student" element={<Student />} />
                <Route path="teacher" element={<Teacher />} />
                <Route path="admin" element={<Admin />} />
                <Route path="/" element={<Content />} />
            </Routes>
        </Router>
    );
}