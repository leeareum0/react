//2. 외부에서 가져올때 import 
import TestComponent3 from "./component/TestComponent3";
//여러개 컴포넌트 사용할 때 {} 사용
import { TestComponent4, TestComponent5 } from "./component/TestComponent4";
import { TestComponent6, TestComponent7 } from "./component/TestComponent6";
import { useState } from "react";

function App() {
  const [str1, setStr1] = useState("테스트 데이터");
  const [num1, setNum1] = useState(100);
  const [arr1, setArr1] = useState([1,2,3,4]);
  const [obj1, setObj1] = useState({
    name: "유저1",
    age: 30,
    addr: "서울시 영등포구",
  });
  const testFunc = () => {
    alert("테스트함수");
  };
  const [objArr, setObjArr] = useState([
    {
      name: "유저1",
      age: 30,
      addr: "서울시 영등포구",
    },
    {
      name: "유저2",
      age: 40,
      addr: "서울시 강남구",
      },
      {
        name: "유저3",
        age: 50,
        addr: "서울시 종로구",
        },
  ]);
  return (
    <div>
      <h1>Component</h1>
      <hr></hr>
      <h2>컴포넌트(Component) : 사용자에게 보여지는 ul 요소의 가장 작은 단위
      </h2>
      <p>HTML 태그는 단일 태그를 작성해야 함, 컴포넌트는 필요한 여러태그에 디자인까지 포함한 HTML태그 덩어리(사용자 정의 태그)</p>
      <p>함수 형식으로 작성하여 문서 내부 또는 외부에 작성한다.(JSX를 리턴하는 함수 형태)</p>
      {/* 작성된 컴포넌트는 다음 컴포넌트에서 포함시킬 수 있음(닫는태그 중요) */}
      <ComponentTest1></ComponentTest1>
      <ComponentTest2 />

      {/* 외부에서 작성된 컴포넌트 사용
        1. 작성한 외부 컴포넌트에서 export
        2. 사용하려는 곳에서 import
        3. 사용
      */}
      <TestComponent3 />
      <TestComponent4 />
      <TestComponent5 />
      <hr></hr>
      <TestComponent6 />
      <TestComponent7 />
      <hr></hr>
      <ComponentTest10 data1="첫번째" />
      <ComponentTest10 data1="두번째" />
      <ComponentTest10 data1="세번째" />
      <ComponentTest11 data1={str1} data2={num1} data3={arr1} data4={obj1} data5={testFunc} />
      <UserTbl objArr={objArr}></UserTbl>
      <hr></hr>
      <table border="1">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {objArr.map((user,index) => {
            return <UserTr key={"user" + index} user={user} />
          })}
        </tbody>
      </table>
  </div>
  );
}

function ComponentTest1(){
  return(
    <div>
      <p>첫번째 컴포넌트</p>
    </div>
  );
}

const ComponentTest2 = () => {
  return (
    <div>
      <h2>이건 두번째 컴포넌트</h2>
    </div>
  );
}

const ComponentTest10 = (props) => {
  const receviceData = props.data1;
  return(
    <div>
      <p>{receviceData}</p>
    </div>
  );
};
function ComponentTest11(props){
  const str2 = props.data1;
  const num2 = props.data2;
  const arr2 = props.data3;
  const obj2 = props.data4;
  const func = props.data5;
  return(
    <ul>
      <li onClick={func}>{str2}</li>
      <li>{num2}</li>
      <li>{obj2.name}</li>
      <li>{obj2.age}</li>
      <li>{obj2.addr}</li>
      {arr2.map((item,index) => {
        return <li key={"arr" + index}>{item}</li>
      })}
    </ul>
  );
}

function UserTbl(props){
  const objArr = props.objArr;
  return(
    <table border="1">
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        {objArr.map((user, index) => {
          return (
          <tr key={"u" + index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.addr}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  )
}
function UserTr(props) {
  const user = props.user;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.addr}</td>
    </tr>
  )
}
export default App;
