import useCustomMove from "../../hooks/useCustomMove.jsx";
import {useEffect, useState} from "react";
import {getList} from "../../api/todoApi.jsx";

const initState = {
    dtoList : [],
    pageNumList : [],
    pageRequestDTO : null,
    prev : false,
    next : false,
    totalCount : 0,
    prevPage : 0,
    nextPage : 0,
    totalPage : 0,
    current : 0
}

function ListComponent(){
    const[serverDate, setServeData] = useState(initState);

    const{page,size} = useCustomMove();

    useEffect(() => {
        getList({page, size}).then(data=> {
            console.log(data);
            setServetData(data);
        });
    }, [page, size])

    return (<div></div>);
}

export default ListComponent;


const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
    params: {s: 'vodka'},
    headers: {
        'X-RapidAPI-Key': '994a06b8f2mshbff0e95525f145fp1f054bjsn7eefc7c1bcf9',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

