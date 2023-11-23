import { profileData } from "../../Datatable-data";
import { FaUserCircle } from "react-icons/fa";
import Div from "../Div";

export default function ProfileTableData({ className }) {
    const [{ name, email, password }] = profileData;
    let passStart = password.slice(0, 2);
    let passEnd = password.slice(password.length - 2, password.length);
    let finalPass = passStart + '*****' + passEnd;
    return (
        <Div className={className}>
            <h1><span><FaUserCircle /></span></h1>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3><em>{finalPass}</em></h3>
        </Div>
    )
}