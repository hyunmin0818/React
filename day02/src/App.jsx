import { useState } from "react"
import Bulb from "./components/Bulb.jsx";

// state의 값을 props로 전달하기
// const Bulb = () =>{
//     const [light, setLight] = useState("OFF");
//     console.log(light);
//     return (
//         <div>
//             {light == "ON" ?
//                 (<h1 style={{backgroundColor:"orange"}}>ON</h1>)
//                 :
//                 (<h1 style={{backgroundColor:"gray"}}>OFF</h1>)
//             }
//             <button
//                 onClick={()=>{
//                     setLight(light == "ON" ? "OFF" : "ON");
//                 }}
//             >{light == "ON" ? "OFF" : "ON"}</button>
//         </div>
//     );
// }
//
// const Counter = () =>{
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button
//                 onClick={()=>{
//                     setCount(count + 1);
//                 }}
//             >+</button>
//         </div>
//     );
// }


function Counter() {
    return null;
}

function App() {
    //const state = useState(0);
    return (
        <>
            <Bulb/>
            <Counter/>
        </>
    )
}

export default App
