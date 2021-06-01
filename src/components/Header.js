import classes from './Header.module.scss'
const { Link } = require("react-router-dom");

function Header() {
  return (
    <header>
      <div>Mentora</div>

      <nav className="">
        <ul>
          <li>
            <a href=''>
              Login
            </a>
          </li>
          <li>
          <a href=''>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
