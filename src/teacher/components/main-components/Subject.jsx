import { useState } from "react";
import { CommonStatusBox, SubjectsStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
SubjectsStatusBox and CommonStatusBoxShort */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { SubjectModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

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
            id="studentBox1"
            title="Subjects"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddSubject" 
                className="btn-common" 
                text="Add new Subject" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <SubjectsStatusBox 
            id="studentBox2"
            title="List of subjects you teach"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <SubjectModal
                id="addSubjectModal"
                title="Add New Subject"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every subject is active. You can deactivate if you want."
            />
        )}
        </>
    )
}