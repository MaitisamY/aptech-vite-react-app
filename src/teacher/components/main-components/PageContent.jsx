import { useState, useEffect } from "react";
import {menu, IntroIcon} from "../sub-components/Menu";
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import Home from "./Home";
import Profile from "./Profile";
import Subject from "./Subject";
import Class from "./Class";
import Student from "./Student";
import Test from "./Test";
import Question from "./Question";
import Div from "../sub-components/Div";
import CommonButton from "../sub-components/Buttons";

export default function PageContent() {
    // Reading the selected item ID from local storage on initial load
    const storedItemId = localStorage.getItem('selectedItemId');
    const [itemId, setItemId] = useState(storedItemId ? parseInt(storedItemId) : menu[0].id);

    // Updating local storage when the selected item changes
    useEffect(() => {
        localStorage.setItem('selectedItemId', itemId.toString());
    }, [itemId]);

    return (
        <>
            <Div id="sidebar" className="sidebar">
                <IntroIcon />
                <ul>
                    {itemId === '' ? 
                    menu.map(item => <li key={item.id}>
                        <CommonButton
                            className={item.name === 'Dashboard' && "active"}
                            onClick={() => setItemId(item.id)}
                            text={<>
                                <i style={{ fontSize: "22px" }}>{item.icon}</i> &nbsp;
                                {item.name} 
                                {item.name === 'Dashboard' ? 
                                <span style={{ float: "right", marginTop: "8px" }}><FaChevronRight /></span> : null}
                            </>}
                        />
                    </li>) : 
                    menu.map(item => <li key={item.id}>
                        <CommonButton 
                            className={item.id === itemId ? "active" : ""}
                            onClick={() => setItemId(item.id)}
                            text={<>
                                <i style={{ fontSize: "22px" }}>{item.icon}</i> &nbsp;
                                {item.name} {item.id === itemId ? 
                                <span style={{ float: "right", marginTop: "8px" }}><FaChevronRight /></span> : null}
                            </>}
                        />
                    </li>)}
                </ul>
            </Div>
            <Div className="main-content">
                {itemId === '' ?
                    <Home />
                    : itemId === 1 ?
                        <Home />
                        : itemId === 2 ?
                            <Profile />
                            : itemId === 3 ?
                                <Subject />
                                : itemId === 4 ?
                                    <Class />
                                    : itemId === 5 ?
                                        <Student />
                                        : itemId === 6 ?
                                            <Test />
                                            : itemId === 7 ?
                                                <Question />   
                                                : null}
            </Div>
            <Div id="utils" className="utils">
                <a className="logout" href="/"><FaPowerOff /></a>
            </Div>
        </>
    )
}