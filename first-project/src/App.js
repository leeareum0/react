import "./test.css";//css파일을 연결

function App() {
      /*
      jsx는 HTML 코드를 함수에서 리턴하는 형태
      ->**리턴할 때 반드시 하나의 태그로 감싸서 리턴
      */
  return(
    <div className="App">
      {/* 이게 주석
        jsx는 기본적으로 HTML과 굉장히 유사 -> 하지만 일부 차이점이 존재(ex. class -> className)
      */}
      <div>JSX 기본문법</div>
      {/* 
        **jsx는 모든 태그에 닫는 태그가 존재 <br>,<hr>,<input>,<img>
          -> 원래 닫는 태그가 없어도 반드시 표시
          -> <br></br>,<br />, <hr></hr>,<hr />
      */}
      <hr></hr>
      <hr />
      {/* jsx에서 inline-style을 적용하고 싶을 때 style속성에 js 객체 대입하는 방식 
      -> css 속성 이름에 - 있는 경우 camel-case로 변환(text-align -> textAlign, backgound-color -> backgoundColor)  
      */}
      <h1 style={{ color: "blue", textAlign: "center"}}>테스트문구</h1>
      {/* 
        CSS 디자인하는 방식도 거의 유사(요소에 속성부여(class -> className) -> CSS파일을 따로 만들어서 처리)
        -> <lable for="id"></label>   <input id="id">
        -> html에서 사용하는 속성 이름이 js에서 사용되는 용어인 경우 혼동 막기 위해서 다르게 처리
        -> class, for 속성으로 사용해도 동작은 함 -> 개발자도구에서 에러가 발생(동작구현에 영향이 있는 경우가 있음)
      */}
      <div className="div1">테스트 클래스</div>
    <div id="div1">테스트아이디</div>
    {/* 
      추가적인 양식
    */}
    <form action="/test" method="post" id="loginFrm">
    <fieldset>
      <legend>로그인</legend>
      <div className="input-wrap">
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" id="id" defaultValue="user01"></input>
      </div>
      <div className="input-wrap">
        <label htmlFor="pw">비밀번호</label>
        <input type="password" name="pw" id="pw"></input>
      </div>
      <div className="input-wrap">
        {/* 
          input태그에 value 속성을 사용해야 하는 경우
          1. type-> button, submit, reset인 경우 readOnly 추가
          2. 값은 입력하는 input(text,password,radio,checkbox) value대신 defaultvalue를 사용
        */}
        <input type="submit" value="로그인" readOnly></input>
        <input type="reset" value="취소" readOnly></input>
      </div>
    </fieldset>
    </form>
    </div>
  );
}

export default App;
