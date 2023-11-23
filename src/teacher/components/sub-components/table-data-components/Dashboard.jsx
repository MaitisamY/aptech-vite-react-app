import { teacherBarData, studentBarData, classesBarData } from "../../Datatable-data";
import Div from '../Div';
import Table from '../Table';

export function TeacherStatusBoxData() {
    const teacherSliced = teacherBarData.slice(0, 3);
    return (
        <Table className="data-table">
            <tbody>
                {teacherBarData.map((bar) => (
                    <tr key={bar.id}>
                        <th>
                            <Div 
                                title={'Ratio of students passing the tests related to ' + bar.labelText} 
                                className={bar.labelClass}>
                                {bar.labelText}
                            </Div>
                        </th>
                        <td>
                            <Div 
                                key={bar.id} 
                                title={'Students passing the tests ratio is ' + bar.barText + ' for ' + bar.labelText} 
                                className={bar.barClass} style={{width: bar.barText, textAlign: "right" }}>
                                {bar.barText}
                            </Div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export function StudentStatusBoxData() {
    const studentSliced = studentBarData.slice(0, 3);
    return (
        <Table className="data-table">
            <tbody>
                {studentSliced.map((studentBar) => (
                    <tr key={studentBar.id}>
                        <th>
                            <Div 
                                title={'Summary of the month of ' + studentBar.labelText} 
                                className={studentBar.labelClass}>
                                {studentBar.labelText}
                            </Div>
                        </th>
                        <td>
                            <Div 
                                title={studentBar.barText + ' of studets has passed in ' + studentBar.labelText } 
                                className={studentBar.barClass} style={{ width: studentBar.barText, textAlign: "right" }}>
                                {studentBar.barText}
                            </Div>
                        </td>
                    </tr>
                ))} 
            </tbody>      
        </Table>
    )
}

export function ClassesStatusBoxData() {
    const classesSliced = classesBarData.slice(0, 3);
    return (
        <Table className="data-table">
            <tbody>
                {classesSliced.map((classesBar) => (
                    <tr key={classesBar.id}>
                        <th>
                            <Div 
                                title={'Summary of the month of ' + classesBar.labelText} 
                                className={classesBar.labelClass}>
                                {classesBar.labelText}
                            </Div>
                        </th>
                        <td>
                            <Div 
                                title={classesBar.barText + ' of studets has passed in ' + classesBar.labelText } 
                                className={classesBar.barClass} style={{ width: classesBar.barText, textAlign: "right" }}>
                                {classesBar.barText}
                            </Div>
                        </td>
                    </tr>
                ))}   
            </tbody>
        </Table>
    )
}