import {useState} from 'react'
import PropTypes from "prop-types";
import './navbar.css'
const Nav = ({ tabCurrent, setTabCurrent }) => {
    Nav.propTypes = {
      tabCurrent: PropTypes.string.isRequired,
      setTabCurrent: PropTypes.func.isRequired,
    };
  const [active, setActive]= useState(tabCurrent)
  return (
    <nav>
      <a 
      href='#about' 
      className={active==="#about"?('active'):('')}
      onClick={() => {setTabCurrent("About");setActive("#about");console.log(active)}}
      >All</a>
      <a 
      href='#Projects' 
      className={active==="#Projects"?('active'):('')}
      onClick={() => {setTabCurrent("Projects");setActive("#Projects");console.log(active)}}
      >Profession</a>
      <a 
      href='#contact' 
      className={active==="#contact"?('active'):('')}
      onClick={() => {setTabCurrent("Contact");setActive("#contact");console.log(active)}}
      >Contact</a>
    </nav>
  )
}
/*test from IDX */
export default Nav