import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <h1>
                <Link to="/">LOGO</Link>
            </h1>
            <nav className="navi">
                <ul>
                    <li>
                        <Link to="/board">게시판</Link>
                    </li>
                    <li>
                        <Link to="/product">메뉴2</Link>
                    </li>
                    <li>
                        <Link to="admin">관리자페이지</Link>
                    </li>
                    <li>
                        <Link to="#">메뉴4</Link>
                    </li>
                    <li>
                        <Link to="#">메뉴5</Link>
                    </li>
                    <li>
                        <Link to="#">메뉴6</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;