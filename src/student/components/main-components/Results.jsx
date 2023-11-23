import React from "react";
import { CommonStatusBox, ResultsStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
SubjectsStatusBox and CommonStatusBoxShort */

export default function Admin() {

    return (
        <>
        <CommonStatusBox
            id="resultBox1"
            title="Results"
            className="status-box"
        />
        <ResultsStatusBox 
            id="resultBox2"
            title="List of your given tests"
            className="status-box"
        />
        </>
    )
}