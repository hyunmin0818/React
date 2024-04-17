
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from "./components/Main2.jsx"
import Button from "./components/Button.jsx";

function App() {
    const ButtonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,
    }


  return (
    <>
      {/*<Header/>*/}
      {/*<Main/>*/}
      {/*<Footer/>*/}
      {/*  <Main2/>*/}

      {/*
      {text={"메일"} color={"red"} a={1} b={2} c={3}}
      ...ButtonProps: 스프레드 연산자
        -> ButtonProps의 내용을 펼쳐서 나열
      */}
        <Button {...ButtonProps}/>
        <Button text={"카페"} />
        <Button text={"블로그"}>
            {/*<div>자식요소</div>*/}
        <Header/>
        </Button>
    </>
  )
}

export default App
