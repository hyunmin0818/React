import { useState, useRef } from "react";
import "./Editor.css";
const Editor = ({onCreate}) =>{
    
    const [content, setContent] = useState("");
    const contentRef = useRef();


    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onSubmit = () =>{
        if( content == "" ){
            contentRef.current.focus();
            alert("할일을 입력해 주세요!");
            return;
        }
        onCreate(content);
        setContent('');
    }

    const KeyDown = (e) =>{
        if( e.keyCode == 13 ){
            onSubmit();
        }
    }




    return (
            <div className="Editor">
                <input 
                    ref={contentRef} 
                    value={content} 
                    onChange={onChangeContent} 
                    onKeyDown={KeyDown} 
                    placeholder="새로운 todolist..."/>
                <button onClick={onSubmit}>추가</button>
            </div>   
    );

}
export default Editor;