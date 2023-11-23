import React, { useState, useEffect } from "react";
import {menu, IntroIcon} from "../sub-components/Menu";
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import Home from "./Home";
import Profile from "./Profile";
import Results from "./Results";
import Div from "../sub-components/Div";
import CommonButton from "../sub-components/Buttons";

export default function PageContentStudent() {
    // Reading the selected item ID from local storage on initial load
    const storedItemId = localStorage.getItem('selectedItemId');
    const [itemId, setItemId] = useState(storedItemId ? parseInt(storedItemId) : menu[0].id);

    // Updating local storage when the selected item changes
    useEffect(() => {
        localStorage.setItem('selectedItemId', itemId.toString());
    }, [itemId]);

    return (
        <>
            <Div id="utils" className="utils">
                <a className="logout" href="/"><FaPowerOff /></a>
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
                            <Results />
                            : null}
            </Div>
        </>
    )
}