// import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

function MainPage(){
    return(
        <BasicLayout>
            <div className={"text-3xl"}>
                {/* <div className={"flex"}>
                    <Link to={'/about'}>About</Link>
                </div> */}
                <div>MainPage</div>
            </div>
        </BasicLayout>
    );
}

export default MainPage;