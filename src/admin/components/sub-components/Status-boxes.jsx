import { administrators, subjects, classes, teachers, students, tests, questions, results } from "../Datatable-data";
import ProfileTableData from "./table-data-components/Profile";
import AdministratorsData from "./table-data-components/Administrator";
import SubjectsData from "./table-data-components/Subject";
import ClassData from "./table-data-components/Class";
import TeacherData from "./table-data-components/Teacher";
import StudentData from "./table-data-components/Student";
import TestData from "./table-data-components/Test";
import QuestionData from "./table-data-components/Question";
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

export function StatusBoxShortest({ title, subtitle, content, adminCount, subjectCount, testCount, children, ...props }) {
    return (
        <Div {...props}>
            <h2>{title}</h2>
            <h3>{subjectCount ? subtitle + ' ' +  subjectCount : 
                    testCount ? subtitle + ' ' +  testCount : 
                    adminCount ? subtitle + ' ' +  adminCount : subtitle}</h3>
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

export function AdminsStatusBox({ title, children, ...props }) {
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
            <AdministratorsData administrators={administrators} />
        </Div>
    )
}

export function SubjectsStatusBox({ title, children, ...props }) {
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
            <SubjectsData subjects={subjects} />
        </Div>
    )
}

export function ClassStatusBox({ title, children, ...props }) {
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
            <ClassData classes={classes} />
        </Div>
    )
}

export function TeacherStatusBox({ title, children, ...props }) {
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
            <TeacherData teachers={teachers} />
        </Div>
    )
}

export function StudentStatusBox({ title, children, ...props }) {
    return (
        <Div {...props}>
            <table>
                <tr>
                    <th><h2>{title}</h2></th>
                    <td>
                        {children}
                    </td>
                </tr>
            </table>
            <StudentData students={students} />
        </Div>
    )
}

export function TestStatusBox({ title, children, ...props }) {
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
            <TestData tests={tests} />
        </Div>
    )
}

export function QuestionStatusBox({ title, children, ...props }) {
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
            <QuestionData questions={questions} />
        </Div>
    )
}

export function ResultStatusBox({ title, children, ...props }) {
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
            <ResultData results={results} />
        </Div>
    )
}
