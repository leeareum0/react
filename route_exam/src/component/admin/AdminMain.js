import { Route, Routes } from "react-router-dom";
import AdminSideMenu from "./AdminSideMenu";
import "./adminMain.css";
import AdminMember from "./AdminMember";
import AdminBoard from "./AdminBoard";
import AdminProduct from "./AdminProduct";

const AdminMain = () => {
    return(
        <div className="admin-all-wrap">
            <h2>관리자페이지</h2>
            <hr></hr>
            <div className="admin-content-wrap">
                <AdminSideMenu />
                <div className="admin-content">
                    <Routes>
                        <Route path="member" element={<AdminMember />} />
                        <Route path="board" element={<AdminBoard />} />
                        <Route path="product" element={<AdminProduct />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminMain;