import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoContext } from "../App";

const Editor =()=>{
// 구조 분해 할당으로 onCreate만
    const {onCreate} = useContext(TodoContext);


    const [content,setContent] = useState("");
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }
    const contentRef = useRef();

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            onSubmit(); // 엔터 키를 누르면 onSubmit 함수 호출
        }
    }
    const onSubmit = ()=>{
        if(content.trim() == ""){
            contentRef.current.focus();
            // alert("할일을 입력해 주세요");
            return;
        }
        onCreate(content);
        setContent(""); // 입력 폼 지우기


    }


    return (
        <div className="Editor">
            <input ref={contentRef} value={content}  onKeyDown={handleKeyDown} onChange={onChangeContent} placeholder="새로운 todolist...."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}
export default Editor;