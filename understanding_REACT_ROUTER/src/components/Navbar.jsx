import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/home"> <li>Home</li></NavLink>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/about"> <li>About</li></NavLink>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/contact"> <li>Contact</li></NavLink>
               {/* <Link to="/user"> <li>User</li></Link> */}
            </nav>
        </div>
    )
}

export default Navbar
