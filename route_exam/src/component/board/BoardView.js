import "./boardView.css"
import { useLocation } from "react-router-dom";

const BoardView = () => {
    //useLocation은 리액트라우터로 페이지 전환 시 전송 받은 데이터를 꺼내는 hooks
    const location = useLocation();
    console.log(location);
    const board = location.state.b;
    return(
        <div className="board-view">
            <table className="board-view-tbl">
                <tbody>
                    <tr>
                        <th>글번호</th>
                        <td>{board.boardNo}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{board.boardTitle}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{board.boardWriter}</td>
                    </tr>
                    <tr>
                        <th>조회수</th>
                        <td>{board.readCount}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{board.boardDate}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td className="boardContent">{board.boardContent}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BoardView;