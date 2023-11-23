import { useState } from "react";
import { CommonStatusBox, TeacherStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
TeacheresStatusBox and CommonStatusBox */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { TeacherModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

export default function Teacher() {
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
            id="TeacherBox1"
            title="Teachers"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddTeacher" 
                className="btn-common" 
                text="Add new Teacher" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <TeacherStatusBox 
            id="TeacherBox2"
            title="List of registered Teachers"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <TeacherModal
                id="addTeacherModal"
                title="Add New Teacher"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every Teacher is active. You can deactivate if you want."
            />
        )}
        </>
    )
}