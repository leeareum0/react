import "./join.css";

function App() {
  return (
    <div className="App">
      <div className="join-wrap">
        <div className="join-bg">
          <div className="title">회원가입</div>
          <div className="input-box">
            <div className="input-wrap mid">
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name"></input>
            </div>
            <div className="input-wrap mid">
              <label htmlFor="nickName">별명</label>
              <input type="text" name="nickName" id="nickName"></input>
            </div>
            <div className="input-wrap long">
              <label htmlFor="email">이메일</label>
              <input type="text" name="email" id="email"></input>
            </div>
            <div className="input-wrap long">
              <label htmlFor="address">주소</label>
              <input type="text" name="address" id="address"></input>
            </div>
            <div className="input-wrap long">
              <label htmlFor="detail">상세주소(필수아님)</label>
              <input type="text" name="detail" id="detail"></input>
            </div>
            <div className="input-wrap route">
              <label htmlFor="route">가입경로</label>
              <select name="route" id="route">
                <option defaultValue="">선택하세요</option>
                <option defaultValue="">유투브광고</option>
                <option defaultValue="">검색</option>
                <option defaultValue="">기타</option>
              </select>
            </div>
            <div className="input-wrap code">
              <label htmlFor="code">추천인 코드</label>
              <input type="text" name="code" id="code"></input>
            </div>
            <div className="agree-box">
              <input type="checkbox" id="agree"></input>
              <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            <div className="button-box">
              <button>가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
