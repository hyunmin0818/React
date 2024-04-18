import { useState , useRef } from "react";


const Register =()=>{
    const onSubmit =()=>{
        if(input.name==""){
            console.log(inputRef.current);
            inputRef.current.focuse();
        }
    };
    // const[name,setName] = useState("이름");
    // const[birth,setBirth] = useState("생일");
    // const[country,setCountry] = useState("국가");
    // const[bio,setBio] = useState("Bio");
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    });
    const inputRef = useRef();
    const refObj = useRef(0);
    console.log("register 컴포넌트 실행!!");


    const onChange = (e) =>{
        refObj.current++;
        console.log(refObj.current)
        // console.log(e.target.value,e.target.name);
        setInput({
            ...input,
            [e.target.name] : e.target.value,

        });

    }
    // const onChangeName = (e) =>{
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     });
    // }
    // const onChangeBirth = (e) =>{
    //     setInput({
    //         ...input,
    //         birth : e.target.value
    //     });
    // }
    // const onChangeCountry = (e) =>{
    //     setInput({
    //         ...input,
    //         country : e.target.value
    //     });
    // }
    // const onChangeBio = (e) =>{
    //     setInput({
    //         ...input,
    //         bio : e.target.value
    //     });
    // }

    // const onChangeName = (e)=>{
    //         setName(e.target.value);
    // }
    // const onChangeBirth = (e) =>{
    //     setBirth(e.target.value);
    // }
    // const onChangeCountry = (e) => {
    //     setCountry(e.target.value);
    // }
    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // }
    return(
        <div>
            <button onClick={() =>{
                refObj.current++;
                console.log(refObj.current);
            }}>ref + 1</button>
            <div>
                <input ref={inputRef} onChange={onChange} name="name" value={input.name} placeholder={"이름입력해 이새끼야"}/>
            </div>
            <div>
                <input onChange={onChange}  name="birth" value={input.birth} type="date"/>

            </div>
            <div>
                <select onChange={onChange}  name="country" value={input.country} >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea value={input.bio}  name="bio" onChange={onChange}/>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>

    );
}

export default Register