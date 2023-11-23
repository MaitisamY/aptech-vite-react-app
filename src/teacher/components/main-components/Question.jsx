import { useState } from "react";
import { CommonStatusBox, QuestionStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
QuestionesStatusBox and CommonStatusBox */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { QuestionModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

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
            id="questionBox1"
            title="Questions"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddQuestion" 
                className="btn-common" 
                text="Add new Question" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <QuestionStatusBox 
            id="questionBox2"
            title="List of questions created by you"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <QuestionModal
                id="addQuestionModal"
                title="Add New Question"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every question is active. You can deactivate if you want."
            />
        )}
        </>
    )
}