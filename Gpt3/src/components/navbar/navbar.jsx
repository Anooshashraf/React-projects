import './navbar.css';
import { RiMenu3Line , RiCloseLin, RiLogoutCircleRLine} from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>

      </div>
    </div>
  )
}

export default Navbar