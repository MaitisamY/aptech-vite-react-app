import { useState } from "react";
import { CommonStatusBox, AdminsStatusBox } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
SubjectsStatusBox and CommonStatusBoxShort */
import CommonButton from "../sub-components/Buttons"; /* Importing (1 button component with the name of) CommonButton */
import { Modal } from "../sub-components/Modal"; /* Importing (1 div component with the name of) Modal */

export default function Admin() {
    // Declaring useState for the modal
    const [modal, setModal] = useState(0);
    function handleClick() {
        modal === 0 && setModal(1);
    }
    function handleCloseClick() {
        modal === 1 && setModal(0);
    }

    return (
        <>
        <CommonStatusBox
            id="adminBox1"
            title="Administrators"
            className="status-box"
        >
            <CommonButton 
                id="btnAddAdmin" 
                className="btn-common" 
                text="Add new Admin" 
                onClick={handleClick} 
            />
        </CommonStatusBox>
        <AdminsStatusBox 
            id="adminBox2"
            title="List of registered Administrators"
            className="status-box"
        /> 
        {modal === 1 && (
            <Modal
                id="addAdminModal"
                title="Add New Admin"
                className="modal"
                requiredFields="All fields are required *"
                closeModal={handleCloseClick}
            />
        )}
        </>
    )
}