import { Link } from "react-router-dom";

const KhList = (props) => {
  const khList = props.khList;
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>번호</th>
          <th>지원이름</th>
        </tr>
      </thead>
      <tbody>
        {khList.map((kh, index) => {
          return (
            <tr key={"k" + index}>
              <td>{kh.khNo}</td>
              <td>
                <Link to="/view">{kh.localName}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default KhList;
