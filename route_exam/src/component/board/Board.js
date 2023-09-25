import "./board.css";
import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";

const BoardList = () => {
    const [BoardList, setBoardList] = useState([
        {
        boardNo : 1, 
        boardTitle: "게시글1",
        boardContent:"첫번째게시물입니다.",
        boardWriter:"user01",
        readCount:20, 
        boardDate:"2023-09-13"
        },
        {
        boardNo : 2, 
        boardTitle: "게시글2",
        boardContent: "두번째게시물입니다.",
        boardWriter: "user02",
        readCount: 20, 
        boardDate: "2023-09-13"
        },
        {
        boardNo : 3, 
        boardTitle: "게시글3",
        boardContent:"세번째게시물입니다.",
        boardWriter: "user03",
        readCount: 20, 
        boardDate: "2023-09-13"
        },
        {
        boardNo : 4, 
        boardTitle: "게시글4",
        boardContent: "네번째게시물입니다.",
        boardWriter: "user04",
        readCount: 20, 
        boardDate: "2023-09-13"
        },
    ])
    return (
        <div className="board-wrap">
            <div className="board-title">게시판</div>
            <div className="board-list">
                <table>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BoardList.map((board,index) => {
                        return <BoardView key={"b" + index} board={board} />
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
const BoardView = (props) => {
    const navigate = useNavigate();
    const board = props.board;
    return(
        <tr onClick={()=>{
            navigate("/boardView", {state:{b:board}});
        }}>
            <td>{board.boardNo}</td>
            <td>
                {board.boardTitle}
                {/* <Link to="/boardView" state={{ b : board }}>
                    {board.boardTitle}</Link> */}
            </td>
            <td>{board.boardWriter}</td>
            <td>{board.readCount}</td>
            <td>{board.boardDate}</td>      
        </tr>
    );
};
export default BoardList;