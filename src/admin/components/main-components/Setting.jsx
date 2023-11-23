import { useState } from "react";
import StatusBox, { StatusBoxShort, StatusBoxShortest } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
StatusBox(Exported as default) and StatusBoxShort */
import { StudentStatusBoxData } from "../sub-components/table-data-components/Dashboard"; 
/* Importing (3 table components with the name of) TeacherStatusBoxData, StudentStatusBoxData and ClassesStatusBoxData */
import CommonButton from "../sub-components/Buttons";

export default function Setting() {

    return (
        <>
        <StatusBox 
            id="Box1"
            className="status-box"
            title="Settings"                                        /* Displaying the first status box component */
            subtitle="Manage and set prefferences for the application."
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        <StatusBox
            id="Box3"
            className="status-box"
            title="Menu"                                        /* Displaying the second status box component */
            subtitle="You can add more menu items according to your need for any of the portal."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            
        </StatusBox>
        </>
    )
    
}