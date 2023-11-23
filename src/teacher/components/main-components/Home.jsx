import StatusBox, { StatusBoxShort, StatusBoxShortest } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
StatusBox(Exported as default) and StatusBoxShort */
import { StudentStatusBoxData, ClassesStatusBoxData } from "../sub-components/table-data-components/Dashboard"; 
/* Importing (3 table components with the name of) TeacherStatusBoxData, StudentStatusBoxData and ClassesStatusBoxData */
import { subjects } from "../Datatable-data";

export default function Home() {
    return (
        <>
        <StatusBox 
            id="Box1"
            className="status-box"
            title="Welcome!"                                        /* Displaying the first status box component */
            subtitle=""
            content="Your dashboard represents the overall stats and status of the application." // The value from DB - 
        />
        <StatusBoxShort
            id="Box2"
            className="status-box-short"
            title="Classes"                                         /* Displaying the fifth status box component */
            subtitle="Classes you take, and their passing ratio."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            <ClassesStatusBoxData />
        </StatusBoxShort>
        <StatusBoxShort
            id="Box3"
            className="status-box-short"
            title="Students"                                        /* Displaying the second status box component */
            subtitle="Students's Passing tests ratio month wise."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            <StudentStatusBoxData />
        </StatusBoxShort>
        <StatusBox
            id="Box4"
            className="status-box"
            title="Subjects"                                        /* Displaying the third status box component */
            subtitle="Total subjects you teach:"
            subjectCount={subjects.length - 7}
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        </>
    )
    
}