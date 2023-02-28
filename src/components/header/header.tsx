import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display:"flex", gap:20, justifyContent:"center"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
        </div>
    );
};

export default Header;