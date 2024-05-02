import {  Children, Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import ReadPage from "../pages/todo/ReadPage";
import AddPage from "../pages/todo/AddPage";
import ModifyPage from "../pages/todo/ModifyPage";

const Loading = <div className={'bg-purple-500'}>Loading</div>
const TodoList = lazy(()=>import("../pages/todo/ListPage"));
const TodoAdd = lazy(()=>import("../pages/todo/AddPage"));
const TodoModify = lazy(()=>import("../pages/todo/ModifyPage"));

const todoRouter = ()=> {
    return[
        {
            path : 'list',  // todo/list
            element : <Suspense><TodoList fallback={Loading}></TodoList></Suspense>,
           
        },
        {
            path : '',  // todo/ 요청이오면 todo/list로 redirection
            element : <Navigate replace={true}></Navigate>
           
        },
        {
            path : 'read/:tno',  // todo/list/:tno
            element : <Suspense  fallback={Loading}><ReadPage/></Suspense>,
           
        },
        {
            path : 'add',  // todo/add
            element : <Suspense fallback={Loading}><AddPage/></Suspense>,
           
        },
        {
            path : 'modify/:tno',  // todo/add
            element : <Suspense fallback={Loading}><ModifyPage/></Suspense>,
           
        },
    ]
};



export default todoRouter;