import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {TbWorldWww} from 'react-icons/tb';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyzer</span>
          <ul className="social-links">
            <li>
              <a href="https://sudhanshupatel.vercel.app/" target="_blank" rel="noreferrer">
                <TbWorldWww />
              </a>
            </li>
            <li>
              <a href="https://github.com/sudhanshu287/" target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sudhanshu287/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
