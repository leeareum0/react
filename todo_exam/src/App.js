import { useState } from "react";
import Header from "./component/common/Header";
import Add from "./component/todo/Add";
import TodoList from "./component/todo/TodoList";

function App() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "JavaScript 복습하기",
      isDone: 1,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "React 복습하기",
      isDone: 0,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "이력서 쓰기",
      isDone: 0,
      isLike: 1,
    },
  ]);
  const changeLike = (todo) => {
    console.log(todo);
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };
  const changeDone = (todo) => {
    console.log(todo);
    const changeStatus = todo.isDone === 0 ? 1 : 0;
    todo.isDone = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };


  // const todoDone = (todo) => {
  //   todo.isDone = 1;
  //    setTodoList([...todoList]);
  // }
  const addTodo = (todoTitle) => {
    const todo = {
      todoNo : todoNo++,
      todoTitle : todoTitle,
      isDone : 0,
      isLike : 0,
    };
    const newArr = [...todoList];
    newArr.push(todo);
    setTodoList(newArr);
  };
  const deleteTodo = (todoNo, index) => {
    console.log("todoNo : " + todoNo);
    console.log("index : " + index);
    //const newArr = [...todoList];
    //newArr에서 todoNo or index를 이용해서 해당하는 객체를 삭제
    //중간데이터 삭제 시 splice함수 사용
    //newArr.splice(index, 1);
    const newArr = todoList.filter((todo) => {
      return todo.todoNo !== todoNo;
    });
    setTodoList(newArr);
  };
  return (
    <div className="wrap">
      <Header />
      <Add addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        changeLike={changeLike}
        changeDone={changeDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
export default App;












