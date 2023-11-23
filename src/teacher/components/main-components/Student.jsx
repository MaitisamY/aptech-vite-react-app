import { useState } from "react";
import { CommonStatusBox, StudentStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
StudentesStatusBox and CommonStatusBox */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { StudentModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

export default function Subject() {
    // Declaring useState for the modal 
    const [modal, setModal] = useState(0);
    function handleClick() {
        setModal(1);
    }
    function handleCloseClick() {
        setModal(0);
    }

    return (
        <>
        <CommonStatusBox
            id="StudentBox1"
            title="Students"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddStudent" 
                className="btn-common" 
                text="Add new Student" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <StudentStatusBox 
            id="StudentBox2"
            title="List of registered students"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <StudentModal
                id="addStudentModal"
                title="Add New Student"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every Student is active. You can deactivate if you want."
            />
        )}
        </>
    )
}