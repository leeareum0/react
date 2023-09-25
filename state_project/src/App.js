
import {useState} from "react";

function App() {
  const name = "이윤수";
  const num = 100;
  const arr = [1, 2, 3, 4];
  const obj = { name: "유저1", age: "20", addr: "서울시 영등포구" };

  //useState(data) : state를 만들면 길이가 2인 배열을 리턴
  const [name2, setName2] = useState("이윤수2");
  const [num2, setNum2] = useState(200);
  const [arr2, setArr2] = useState([10, 20, 30, 40]);

  const [obj2,setObj2] = useState({name:"유저2",age: "30", addr: "서울시 강남구"});

  // name2[0] = getter 역할
  // name2[1] = setter 역할
  // destructuring 문법을 주로 사용
  // const [name3, setName3] = useState("이윤수3");

  // console.log(name2[0]);
  // console.log(name3);
  
  ////////////////////////////////////////////////////////////
  
  function testFunction1(){
    const div1 = document.querySelector("#div1");
    div1.innerText = "변경3";
  };

  const testFunction2 = function(){
    const div1 = document.querySelector("#div1");
    div1.innerText = "변경4";
  };

  const testFunction3 = () => {
    const div1 = document.querySelector("#div1");
    div1.innerText = "변경5";
  };

  const testFunction4 = () => {
    const div1 = document.querySelector("#div1");
    div1.innerText = "변경6";
  };

  ////////////////////////////
  let str3 = "일반문자열";
  const [str4, setStr4] = useState("state 문자열");


  const changeStr3 = () => {
    //str3 변수 값을 변경 -> 화면에 str3을 출력하는 부분도 같이 변경
    str3 = "자바스크립트 변수 변경";
    //자바스크립트 변수를 변경하더라도 이미 만들어진 HTML은 따로 변경해줘야함
    // const div3 = document.querySelector("#div3");
    // div3.innerText = str3;
  };

  const changeStr4 = () => {
    //str4 state값 변경 -> 화면에 변경된 str4 state를 출력
    //state는 값을 변경할 때 반드시 변경용 함수를 사용
    setStr4("state값 변경");
    //const div4 = document.querySelector("#div4");
    //div4.innerText = str4;
    /*
    state의 경우 state값으르 변경함수를 이용해서 변경하면 화면을 처리하는 로직을 만들지 않아도 화면에 자동으로 반영
    -> 리액트에서 우리가 작성한 jsx를 실제 화면으로 변경(html로 변경)하는 작업을 rendering이라고 함
    -> 일반변수는 최초 작성한대로 rendering이 일어나면 끝
    -> state는 state값을 변경함수로 변경하게 되면 해당부분만 다시 redering함(바뀐값이 자동으로 화면에 적용)
    */ 
  };

  const [num4, setNum4] = useState(1000);
  const [arr4, setArr4] = useState([10,11,12,13]);
  const [obj4, setObj4] = useState({
    name: "유저4",
    age: 44,
    addr: "서울시 강남구",
  });

  const changeNum4 = () => {
    setNum4(2000);
  };

  const changeArr4 = () => {
    //객체 or 배열 state를 수정하는 방법
    //1. 기존 객체 or 기준 배열을 깊은복사(...)
    const newArr = [...arr4];
    //2. 복사된 배열을 수정
    newArr[1] = 101;
    newArr[2] = 102;
    //3. 수정완료된 배열을 변경함수로 적용
    setArr4(newArr);
    //기존객체를 복사하지 않고 완전히 새로운 배열을 변경함수로 넣어도 상관없음
  };

  const changeArr5 = () => {
    const testArr = [100, 200, 300, 400];
    setArr4(testArr);
  };

  const changeObj4 = () => {
    //1. 객체 깊은복사
    const newObj = {...obj4};
    //2. 변경할 데이터를 변경
    newObj.age = 50;
    //3. 변경함수를 통해서 state를 변경
    setObj4(newObj);
  }

  const changeObj5 = () => {
    const testObj = {name:"유저5",age: 100, addr: "경기도"};
    setObj4(testObj);
  };
  
  return (
    <div className="App">
      <h1>자바스크립트 데이터를 화면에 표현</h1>
      <hr></hr>
      {/* 
        자바스크립트 변수에 있는 데이터를 출력하기 위해서
        mustache(콧수염) {변수}를 사용함
      */}
      <div>{name}</div>
      <div>{num}</div>
      <div>
        {name} {num}
      </div>
      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
      </ul>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.addr}</li>
      </ul>
      <hr></hr>
      <h1>state를 이용해서 화면에 출력</h1>
      {/* 
        state : 리액트에서 유동적인 데이터를 다루기 위한 객체
        state를 사용하는 방법
        1. state import
          - import{userState} from "react";
        2. destructuring 문법과 hook을 이용해서 데이터 생성
          - const [data, setData] = useState(데이터);
          - destructuring : 배열데이터를 일반 변수처럼 사용하기 위한 문법
            -> useState는 길이가 2인 배열을 리턴하는데 첫번째 데이터를 data변수에, e두번째 데이터를 setData변수에 저장
          - useState(데이터) -> state hooks -> 매개변수로 준 데이터를 state로 만드는 기능
            -> react hooks : 리액트 클래스형컴포넌트를 바로 사용할 수 있게 해주는 라이브러리로 리액트 16.8버전에 새로 추가됨
        */}
      <div>{name2}</div>
      <div>{num2}</div>
      <ul>
        <li>{arr2[0]}</li>
        <li>{arr2[1]}</li>
        <li>{arr2[2]}</li>
        <li>{arr2[3]}</li>
      </ul>
      <ul>
        <li>{obj2.name}</li>
        <li>{obj2.age}</li>
        <li>{obj2.addr}</li>
      </ul>
      <hr></hr>
      <br></br>
      <h1>JSX에서 이벤트를 적용하는 방법</h1>
      {/* 
        인라인이벤트
        onclick(카멜표기법) 속성에 함수를 연결
          onClick={function(){

          }}
          onclick={() => {

          }}
          
          () => {} : 함수를 정의하는 형태로 화살표함수(arrow function)
      */
        }
      <div id="div1">클릭이벤트 확인용 div</div>
      <button onClick={function() {
        const div1 = document.querySelector("#div1");
        div1.innerText = "변경1";
      }}>
        클릭1
        </button>

        <button onClick={() => {
          const div1 = document.querySelector("#div1");
          div1.innerText = "변경2";
        }}>
          클릭2
        </button>

        <button onClick={() => {
          testFunction1();
        }}>
        클릭3
        </button>

        {/*  */}
        <button onClick={() => {
          testFunction2();
        }}>
        클릭4
        </button>
        
        {/* 5. 변수에 저장되어있는 함수를 사용(arrow function 사용) */}
        <button onClick={() => {
          testFunction3();
        }}>
        클릭5
        </button>

        {/* 6. 변수에 저장되어있는 함수를 사용(함수이름으로 연결) */}
        <button onClick={testFunction4}>클릭6</button>
        {/* 
          다른 이벤트도 동일한 형태로 적용
          단, javascript이벤트랑 약간 다른 부분이 있음(keyup -> change)
          -> 수업 진행하면서 다른 부분은 따로 언급
        */}

        {/* 
          일반 js변수와 state비교
        */}
        <h1>js변수와 state 비교</h1>
        <div id="div3" onClick={changeStr3}>
          {str3}</div>
        <div id="div4" onClick={changeStr4}>
          {str4}</div>
        
        <p id="p4">{num4}</p>

        <ul>
          <li>{arr4[0]}</li>
          <li>{arr4[1]}</li>
          <li>{arr4[2]}</li>
          <li>{arr4[3]}</li>
        </ul>
        <ul>
          <li>{obj4.name}</li>
          <li>{obj4.age}</li>
          <li>{obj4.addr}</li>
        </ul>
        <button onClick={changeNum4}>숫자 state 변경하기</button>
        <button onClick={changeArr4}>배열 state 변경하기</button>
        <button onClick={changeArr5}>배열 state 변경하기2</button>
        <button onClick={changeObj4}>객체 state 변경하기</button>
        <button onClick={changeObj5}>객체 state 변경하기2</button>
        <hr></hr>
        {/* 이미지/아이콘 추가 */}
        <img src="/img/chat-bg.jpg"></img>
        <span class="material-icons">search</span>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default App;
