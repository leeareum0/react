import "./test.css";

function App() {
  return (
    <div className="App">
      <form action="/test" method="post" id="frm">
      <fieldset>
        <h3>회원가입</h3>
        <div className="input-wrap1">
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div className="input-wrap1">
          <label htmlFor="Rename">별명</label>
          <input type="text" name="Rename" id="Rename"></input>
        </div>
        <div className="input-wrap2">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email"></input>
        </div>
        <div className="input-wrap2">
          <label htmlFor="address">주소</label>
          <input type="text" name="address" id="address"></input>
        </div>
        <div className="input-wrap2">
          <label htmlFor="address2">상세주소(필수아님)</label>
          <input type="text" name="address2" id="address2"></input>
        </div>
        <div className="input-wrap3">
          <label htmlFor="join">가입경로</label>
          <select>
            <option>선택하세요</option>
            <option>네이버</option>
            <option>유투브</option>
            <option>지인추천</option>
          </select>
          </div>
          <div className="input-wrap4">
          <label htmlFor="namecode">추천인 코드</label>
          <input type="text" name="namecode" id="namecode"></input>
          </div>
        <hr></hr>
        <input type="checkbox"></input>개인정보 수집 및 이용에 동의합니다.
        <input type="submit" value="가입하기" id="joinBtn" readOnly></input>
      </fieldset>
      </form>
    </div>
  );
}

export default App;
