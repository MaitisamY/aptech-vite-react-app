import { CommonStatusBox, ProfileStatusBox } from "../sub-components/Status-boxes"; // Importing (A div component called) ProfileStatusBox
import CommonButton from "../sub-components/Buttons";

export default function Profile() {
    return (
        <>
        <CommonStatusBox 
                className="status-box"
                title="Profile"                             //* Displaying the first status box component */
        >
            <CommonButton
                    id="editProfile"
                    className="btn-common"
                    text="Edit"
            />
        </CommonStatusBox>
        <ProfileStatusBox className="status-box" /> {/* Displaying ProfileStatusBox component */}
        </>
    )
}