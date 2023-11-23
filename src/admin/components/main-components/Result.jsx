import { useState } from "react";
import { CommonStatusBox, ResultStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
QuestionesStatusBox and CommonStatusBox */

export default function Result() {
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
            id="resultBox1"
            title="Results"
            className="status-box"
        />
        <ResultStatusBox 
            id="resultBox2"
            title="List of results"                 /* Displaying the second status box component */
            className="status-box"
        />
        </>
    )
}