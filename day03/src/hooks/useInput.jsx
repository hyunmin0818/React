import {useState} from "react";

function  useInput(){
    const [input, setInput] = useState();
    const onChange =(e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
    // 배열로 input, onChange를 return
}

export default useInput;