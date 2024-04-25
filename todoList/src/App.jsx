
import { useState,useRef, useReducer, useCallback, createContext } from 'react';
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'


// 임시 데이터
const mockData=[
  {
    id :0,        // db에서의 pk
    isDone:false, // 선택을 위한 체크박스 값
    content : "React 공부하기",
    date : new Date().getTime(), // 현재시각

  },
  {
    id :1,        // db에서의 pk
    isDone:false, // 선택을 위한 체크박스 값
    content : "Spring boot 공부하기",
    date : new Date().getTime(), // 현재시각

  },
  {
    id :2,        // db에서의 pk
    isDone:false, // 선택을 위한 체크박스 값
    content : "AWS 공부하기",
    date : new Date().getTime(), // 현재시각

  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // 기존 state와 새로운 todo를 합쳐서 새로운 배열을 반환
      return [...state, action.data];
    case "UPDATE":
      // 업데이트할 아이템을 찾아서 isDone 값을 토글
      return state.map(todo =>
          todo.id == action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id != action.id);
    default:
      return state;
  }
}

export const TodoContext = createContext();



function App() {


  // const [todos,setTodos] = useState(mockData);
  const [todos,dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = useCallback((content)=>{
    dispatch({
      type : "CREATE",
      data :
          {

            id :idRef.current++,
            isDone:false,
            content : content,
            date : new Date().getTime(),
          }
    })
    // 스프레드 연산자로 기존의 todos데이터와 완전 동일한 데이터를 넣어주고, 우리가 추가하려는 newTodo 데이터도 넣어준다.
    // setTodos([newTodo, ...todos]);

  },[]);
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      id: targetId
    });
  },[])
  // todos state의 값들 중에서 targetId와 일치하는 id를 갖는 투두 아이템의 isDone변경

  //todos 배열에서 targetId와 일치하는 id를 갖는 요소의 isDone데이터만 토글로 바꾼 배열
  // setTodos(todos.map((todo)=>{
  //   // 삼항연산자로 표현
  //   return todo.id == targetId
  //   ? {...todo, isDone : ! todo.isDone}
  //   : todo
  // if(todo.id == targetId){
  //   return{
  //     ...todo,
  //     isDone : !todo.isDone
  //   }
  // }
  // return todo;

  // const onDelete = (targetId) =>{
  //   // todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  //   // 즉, 삭제 대상이 아닌 영역(targetId와 일치하지 않은 대상)만 필터링
  //   setTodos(todos.filter((todo)=>todo.id != targetId));
  // }

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     id: targetId
  //   });
  // }

  // 1param : 최적화 하고싶은 대상 함수, 그 함수를 토대로 return
  // 2param : deps, deps가 변경되었을때만 함수 실행
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type: "DELETE",
      id: targetId
    });
  },[]);

  return (
      <div className="App">
        <Header/>
        <TodoContext.Provider value={{
          todos,onCreate,onDelete,onUpdate
        }}>
          <Editor/>
          <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        </TodoContext.Provider>
      </div>
  )
}

export default App