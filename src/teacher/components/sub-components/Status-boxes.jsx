import { subjects, classes, students, tests, questions } from "../Datatable-data";
import ProfileTableData from "./table-data-components/Profile";
import SubjectsData from "./table-data-components/Subject";
import ClassData from "./table-data-components/Class";
import StudentData from "./table-data-components/Student";
import TestData from "./table-data-components/Test";
import QuestionData from "./table-data-components/Question";
import Div from "./Div";
import Table from './Table';

export default function StatusBox( { title, subtitle, content, subjectCount, children, ...props }) {
    return (
        <Div {...props}>
            <h2>{title}</h2>
            <h3>{subjectCount ? subtitle + ' ' + subjectCount : subtitle}</h3>
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

export function StatusBoxShortest({ title, subtitle, content, children, ...props }) {
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
            <SubjectsData subjects={subjects.slice(2, 5)} />
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
            <ClassData classes={classes.slice(0, 4)} />
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
        </Div>
    )
}

export function StudentStatusBox({ title, children, ...props }) {
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
            <TestData tests={tests.slice(0, 3)} />
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
            <QuestionData questions={questions.slice(0, 3)} />
        </Div>
    )
}