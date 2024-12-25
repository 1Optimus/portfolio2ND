import {useState} from 'react'
import PropTypes from "prop-types";
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'
import {HiTemplate} from 'react-icons/hi'
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
      href="#"
      className={active === "#" ? "active" : ""}
      onClick={() => {setTabCurrent("Projects");setActive("#")}}
      ><AiOutlineHome/></a>
      <a 
      href='#about' 
      className={active==="#about"?('active'):('')}
      onClick={() => {setTabCurrent("About");setActive("#about")}}
      ><AiOutlineUser/></a>
      <a 
      href='#experiences' 
      className={active==="#experiences"?('active'):('')}
      onClick={() => {setTabCurrent("Projects");setActive("#experiences")}}
      ><BsFillBookFill/></a>
      <a 
      href='#Projects' 
      className={active==="#Projects"?('active'):('')}
      onClick={() => {setTabCurrent("Projects");setActive("#Projects")}}
      ><HiTemplate/></a>
      <a 
      href='#contact' 
      className={active==="#contact"?('active'):('')}
      onClick={() => {setTabCurrent("Contact");setActive("#contact")}}
      ><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav