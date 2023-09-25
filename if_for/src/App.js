import {useState} from "react";
function App() {
  const arr = [1, 2, 3, 4, 5];
  const [users, setUsers] = useState([
    {userId: "user01", userName: "유저1", userAge: 21, userType: 1, userGender: "M"},
    {userId: "user02", userName: "유저2", userAge: 22, userType: 2, userGender: "F"},
    {userId: "user03", userName: "유저3", userAge: 23, userType: 2, userGender: "M"},
    {userId: "user04", userName: "유저4", userAge: 24, userType: 3, userGender: "F"},
    {userId: "user05", userName: "유저5", userAge: 25, userType: 3, userGender: "F"},
  ]);
  //배열데이터를 이용해서 jsx배열을 만듬
  const printArr = [
    <li>{arr[0]}</li>,
    <li>{arr[1]}</li>,
    <li>{arr[2]}</li>,
    <li>{arr[3]}</li>,
    <li>{arr[4]}</li>,
  ];
  const testArr = new Array();
  for(let i=0;i<arr.length;i++) {
    testArr.push(<li>{arr[i]}</li>);
  }
  /*function showArr(){

  }*/
  const showArr = () => {
    const arr2 = new Array();
    for(let i=0;i<arr.length;i++) {
      arr2.push(<li>{arr[i]}</li>);
    }
    return arr2;
  }

  return (
    <div className="App">
      <h1>REACT 반복문, 조건문 사용하기</h1>
      <hr></hr>
      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </ul>

      {/* jsx배열은 화면에 태그로 그대로 표현 */}
      {/* <ul>{printArr}</ul>
      <ul>{testArr}</ul> */}

      {/* 
      **반복하고 싶은 경우 jsx배열을 리턴하는 함수를 만들고 그 함수를 호출 
        showArr() 함수 사용
      */}
      {/* <ul>{showArr()}</ul> */}

      {/* **배열의 map함수를 사용(제일 많이 사용됨)
      배열을 순회하는 함수 + 리턴하는 값을 다시 배열로 생성
      => return + key값 반드시 작성
      */}
      <ul>
        {arr.map(function (item,index){
          return<li key={"arr" + index}>{item}</li>;
        })}
      </ul>
      <hr></hr>
      <h3>map이용해서 테이블 유저 전체 정보 출력하기</h3>
      <table border="1">
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>나이</th>
            <th>회원등급</th>
            <th>성별</th>
          </tr>
        </thead>
        <tbody>
          {/* 
            map 함수 사용
            -> 함수를 따로 만들지 않아도 바로 사용할 수 있어서 가장 일반적인 형태의 반복문
            -> jsx는 xml이므로 모든 javascript구문이 적용x
            -> map은 자동으로 배열을 리턴하는 형태 -> 화면에 바로 표현가능
            -> map사용시(반복문 사용 시) key값 반드시 부여
          */}
          {users.map((item,index) => {
            return (
              // 감싸는 태그가 없을 경우 <>공란으로라도 감싸야함</>
              // 감싸는 태그 앞에 key값 
              <tr key={"user" + index}>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.userAge}</td>
                <td>
                  {/* 삼항연산자 */}
                  {item.userType === 1 ? "관리자" : item.userType === 2 ? "정회원" : "준회원"}
                </td>
                <td onClick={() => {
                  const changeGender = item.userGender === "M" ? "F" : "M";
                  console.log(changeGender);
                  const newUsers = [...users];
                  newUsers[index].userGender = changeGender;
                  setUsers(newUsers);
                }}
                >
                  {item.userGender === "M" ? "남" : "여"}
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
