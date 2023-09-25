import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/board/Board";
import BoardView from "./component/board/BoardView";
import AdminMain from "./component/admin/AdminMain";
import ProductMain from "./component/product/ProductMain";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/board" element={<BoardList />} />
        <Route path="/boardView" element={<BoardView />} />
        <Route path="/product" element={<ProductMain />} />
        <Route path="admin/*" element={<AdminMain />} />
        {/* <Route path="/admin/member" element={<AdminMember />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/board" element={<AdminBoard />} />
        */} 
      </Routes> 
    </div>  
  );
}

export default App;

