import { useState } from "react";
import { CommonStatusBox, ClassStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
ClassesStatusBox and CommonStatusBox */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { ClassModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

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
            id="classBox1"
            title="Classes"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddClass" 
                className="btn-common" 
                text="Add new Class" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <ClassStatusBox 
            id="classBox2"
            title="List of registered Classes"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <ClassModal
                id="addClassModal"
                title="Add New Class"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every class is active. You can deactivate if you want."
            />
        )}
        </>
    )
}