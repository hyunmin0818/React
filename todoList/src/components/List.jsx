import "./List.css";
import TodoItem from "./TodoItem";
import {useMemo, useState, useContext} from "react";

const List =({todos, onUpdate , onDelete})=>{

    const [search,setSearch] = useState("");
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }
    const getFilteredData = ()=>{
        const searchTerm = search.toLowerCase(); // 검색어를 소문자로 변환
        if(search == ""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(searchTerm) // 할 일 항목의 내용도 소문자로 변환하여 비교
        );
    }

    // 리렌더링 될때마다 호출
    const filteredTodos = getFilteredData();
    // console.log(filteredTodos);

    const {totalCount,doneCount,notDoneCount} = useMemo(() => {
        // 기억되어야 할 대상 연산
        console.log("getAnalyzeData 호출");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount,doneCount,notDoneCount};
    }, []);

    // todo들의 상태 분석해서 수치로 제공하는 함수 만들기
    // const getAnalyzedData = ()=>{
    //     console.log("getAnalyzeData 호출");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=>todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount,doneCount,notDoneCount};
    // }
    // const {totalCount,doneCount,notDoneCount}= getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}
                                 onDelete={onDelete}/>; // onUpdate props 전달
            })}
        </div>
    );
}
export default List;