import StatusBox, { StatusBoxShort, StatusBoxShortest } from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
StatusBox(Exported as default) and StatusBoxShort */
import { TeacherStatusBoxData, StudentStatusBoxData, ClassesStatusBoxData } from "../sub-components/table-data-components/Dashboard"; 
/* Importing (3 table components with the name of) TeacherStatusBoxData, StudentStatusBoxData and ClassesStatusBoxData */
import { administrators, subjects, tests } from "../Datatable-data";

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
            subtitle="Classes wise students's passing ratio."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            <ClassesStatusBoxData />
        </StatusBoxShort>
        <StatusBoxShort
            id="Box3"
            className="status-box-short"
            title="Students"                                        /* Displaying the second status box component */
            subtitle="Students passing tests ratio."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            <StudentStatusBoxData />
        </StatusBoxShort>
        <StatusBoxShortest
            id="Box4"
            className="status-box-shortest"
            title="Subjects"                                        /* Displaying the third status box component */
            subtitle="Total subjects registered:"
            subjectCount={subjects.length}
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        <StatusBoxShortest
            id="Box5"
            className="status-box-shortest"
            title="Admins"                                          /* Displaying the fourth status box component */
            subtitle="Total admins registered:"
            adminCount={administrators.length}
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        <StatusBoxShortest
            id="Box6"
            className="status-box-shortest"
            title="Tests"                                           /* Displaying the sixth status box component */
            subtitle="Tests taken by teachers till date:"
            testCount={tests.length}
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        <StatusBox 
            id="Box7"
            className="status-box"
            title="Teachers"                                        /* Displaying the first status box component */
            subtitle="Students passing tests ratio related to teachers."
            content="Yet to be implemented Dynamically" // The value from DB - 
        >
            <TeacherStatusBoxData />
        </StatusBox>
        </>
    )
    
}