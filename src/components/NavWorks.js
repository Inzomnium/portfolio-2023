
import { NavLink } from "react-router-dom"

export const NavBarWorks = () => {

return (

<ul id="myworks-btns" className="btns-works">
  <li><NavLink to="/mywork">Web Development & Design</NavLink></li>
  <li><NavLink to="/client">Product & Project Management</NavLink></li>
  <li><NavLink to="/UX-consulting">UX Case Studies</NavLink></li>
</ul>

)



}