import {Link} from "react-router-dom";

function MainPage(){
    return(
        <div className={'text-3xl'}>
            <div className={"flex"}>
                <Link to={'/about'}></Link>
            </div>
            <div>MainPage</div>
        </div>

    );
}

export default MainPage;