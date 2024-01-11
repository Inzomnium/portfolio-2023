
import { NavLink } from "react-router-dom"

export const NavBarWorks = () => {

return (

<ul id="myworks-btns" className="btns-works">
  <li><NavLink to="/mywork">Web Dev/Design</NavLink></li>
  <li><NavLink to="/client">Client/Project Management</NavLink></li>
  <li><NavLink to="/UX-consulting">UX Study cases</NavLink></li>
</ul>

)



}