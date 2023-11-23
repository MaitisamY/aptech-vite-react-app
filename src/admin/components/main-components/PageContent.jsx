import { useState, useEffect } from "react";
import {menu, IntroIcon} from "../sub-components/Menu";
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import CommonButton from "../sub-components/Buttons";
import Div from "../sub-components/Div";
import Home from "./Home";
import Profile from "./Profile";
import Admin from "./Admin";
import Subject from "./Subject";
import Class from "./Class";
import Teacher from "./Teacher";
import Student from "./Student";
import Test from "./Test";
import Question from "./Question";
import Result from "./Result";

export default function PageContent() {
    // Reading the selected item ID from local storage on initial load
    const storedItemId = localStorage.getItem('selectedItemId');
    const storedThemeId = localStorage.getItem('selectedThemeId');
    
    const [itemId, setItemId] = useState(storedItemId ? parseInt(storedItemId) : menu[0].id);
    const [themeId, setThemeId] = useState(storedThemeId ? parseInt(storedThemeId) : 0);

    // Updating local storage when the selected item changes
    useEffect(() => {
        localStorage.setItem('selectedItemId', itemId.toString());
    }, [themeId]);

    useEffect(() => {
        localStorage.setItem('selectedThemeId', themeId.toString());
    }, [themeId]);

    return (
        <>
            <Div id="utils" className="utils">
                <a className="logout" href="/"><FaPowerOff /></a>
            </Div>
            <Div id="sidebar-responsive" className="sidebar-responsive">
                <IntroIcon />
                <ul>
                    {itemId === '' ? 
                    menu.map(item => <li key={item.id}>
                        <CommonButton 
                            className={item.name === 'Dashboard' && "active"}
                            onClick={() => setItemId(item.id)}
                            text={<i style={{ fontSize: "22px" }}>{item.icon}</i>}    
                        />
                    </li>) : 
                    menu.map(item => <li key={item.id}>
                        <CommonButton className={item.id === itemId ? "active" : ""}
                            onClick={() => setItemId(item.id)}
                            text={<i style={{ fontSize: "22px" }}>{item.icon}</i>}
                        />
                    </li>)}
                </ul>
            </Div>
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
                                {item.name} 
                                {item.id === itemId ? 
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
                                <Admin />
                                : itemId === 4 ?
                                    <Subject />
                                    : itemId === 5 ?
                                        <Class />
                                        : itemId === 6 ?
                                            <Teacher />
                                            : itemId === 7 ?
                                                <Student />
                                                : itemId === 8 ?
                                                    <Test />
                                                    : itemId === 9 ?
                                                        <Question />
                                                        : itemId === 10 ?
                                                            <Result />
                                                            : null}
            </Div>
        </>
    )
}