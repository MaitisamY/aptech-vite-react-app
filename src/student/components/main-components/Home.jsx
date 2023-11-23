import StatusBox from "../sub-components/Status-boxes"; /* Importing (2 div components with the name of) 
StatusBox(Exported as default) and StatusBoxShort */

export default function Home() {
    return (
        <>
        <StatusBox 
            id="Box1"
            className="status-box"
            title="Welcome!"                             //* Displaying the first status box component */
            subtitle=""
            content="All of the tests assigned to you will be displayed here" // The value from DB - 
        />
        <StatusBox 
            id="Box2"
            className="status-box"
            title="Notifications"                             //* Displaying the first status box component */
            subtitle="No notifications yet"
            content="Yet to be implemented Dynamically" // The value from DB - 
        />
        </>
    )
    
}