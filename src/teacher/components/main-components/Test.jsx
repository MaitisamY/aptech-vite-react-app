import { useState } from "react";
import { CommonStatusBox, TestStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
TestesStatusBox and CommonStatusBox */
import CommonButton from "../sub-components/Buttons"; // Importing (A Button component with the name of) CommonButton
import { TestModal } from "../sub-components/Modal"; // Importing (A Modal component with the name of) SubjectModal

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
            id="TestBox1"
            title="Tests"
            className="status-box"
        >                                                       
            <CommonButton                                       /* Displaying the first status box component */
                id="btnAddTest" 
                className="btn-common" 
                text="Add new Test" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <TestStatusBox 
            id="TestBox2"
            title="List of tests created by you"                 /* Displaying the second status box component */
            className="status-box"
        /> 
        {modal === 1 && (
            <TestModal
                id="addTestModal"
                title="Add New Test"
                className="modal"                               /* Displaying the modal component */
                requiredText="All fields are required *"
                closeModal={handleCloseClick}
                instructions="By default every Test is active. You can deactivate if you want."
            />
        )}
        </>
    )
}