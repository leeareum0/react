import { Link } from "react-router-dom";
import "./adminSideMenu.css";
const AdminSideMenu = () => {
  const activeMenu = (e) => {
    const menus = document.querySelectorAll(".admin-side-menu a");
    menus.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="admin-side-menu">
      <ul>
        <li>
          <Link to="member" onClick={activeMenu}>
            회원관리
          </Link>
        </li>
        <li>
          <Link to="product" onClick={activeMenu}>
            상품관리
          </Link>
        </li>
        <li>
          <Link to="board" onClick={activeMenu}>
            게시물관리
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default AdminSideMenu;