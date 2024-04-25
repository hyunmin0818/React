import {createBrowserRouter, RouterProvider} from "react-router-dom";
import root from "../main.jsx"
// import MainPage from "../pages/MainPage.jsx";
import {Suspense, lazy} from "react";

const Loading = <div className={'bg-amber-500'}>Loading</div>
const Main = lazy(() => import("../pages/MainPage.jsx"));
const About = lazy(() => import("../pages/About.jsx"))
const TodoList = = lazy(() => import("../pages/TodoList.jsx"))

const root = createBrowserRouter([
    {
        path : '',
        element: <Suspense>fallback={Loading}<Main/></Suspense>
    },
    {
        path : 'about',
        element: <Suspense>fallback={Loading}<Main/></Suspense>
    },
]);

export default root;