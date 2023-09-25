import BoardList from "./component/BoardList";
import NoticeList from "./component/NoticeList";
import Main from "./component/Main";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  //navigate hooks 사용 -> 스크립트레벨에서 페이지를 이동할 때
  const navigation = useNavigate();
  const goNotice = () => {
    //window.location.href = "/notice"; -> a태그와 같은 효과이므로 페이지 이동시 깜박거림
    //location 대체
    navigation("/notice");
  };
  return (
    <div className='wrap'>
      <h3><Link to="/main">메인</Link></h3>
      <h3><Link to="/board">게시판</Link></h3>
      <h3><span onClick={goNotice}>공지사항</span></h3>
      
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/notice" element={<NoticeList />} />
      </Routes>
      <p>footer</p>
    </div>
  );
}

export default App;
