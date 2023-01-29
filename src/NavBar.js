import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './assests/gameLogo.png';
import profile from './assests/profileIcon.jpg';

export default function NavBar() {
  return <nav className="nav">
    <div className="topnav">
        <Link to="/">
            <img className="homeImage" src={logo} alt="logo" />
        </Link>
        <ul>
            <CustomLink className="pages" to="/games">Games</CustomLink>
            <CustomLink clasName="pages" to="/fav">Favorites</CustomLink>
        </ul>
    </div>
    <Link to="/" className="icon">
        <img className="profileIcon" src={profile} alt="logo" />
    </Link>
  </nav>
}

function CustomLink( {to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> 
                {children}
            </Link>
        </li>
    )
}
