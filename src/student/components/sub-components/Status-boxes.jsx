import ProfileTableData from "./table-data-components/Profile";
import { studentResultData } from "../Datatable-data";
import ResultData from "./table-data-components/Result";
import Div from "./Div";
import Table from "./Table";

export default function StatusBox( { title, subtitle, content, children, ...props }) {
    return (
        <Div {...props}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h4>{content}</h4>
            {children}
        </Div>
    )
}

export function StatusBoxShort({ title, subtitle, content, children, ...props }) {
    return (
        <Div {...props}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h4>{content}</h4>
            {children}
        </Div>
    )
}

export function CommonStatusBox({ title, children, ...props }) {
    return (
        <Div {...props}>
            <Table>
                <tbody>
                    <tr>
                        <th><h2>{title}</h2></th>
                        <td>
                            {children}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Div>
    )
}

export function ProfileStatusBox({ ...props }) {
    return (
        <Div {...props}>
            <ProfileTableData className="profile-card" />
        </Div>
    )
}

export function ResultsStatusBox({ title, children, ...props }) {
    return (
        <Div {...props}>
            <Table>
                <tbody>
                    <tr>
                        <th><h2>{title}</h2></th>
                        <td>
                            {children}
                        </td>
                    </tr>
                </tbody>    
            </Table>
            <ResultData results={studentResultData} />
        </Div>
    )
}