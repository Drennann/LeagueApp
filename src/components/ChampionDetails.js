import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {fetchChampionData, fetchAllChampionsData} from "../auxiliares/auxiliares"
import ShowDetails from "./ShowDetails";

export default function ChampionDetails({champion}) {

    let [championData, setChampionData] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
       try{(async () => {
            let res = await fetchAllChampionsData();
            if(res.every(c => c !== champion)){
                navigate("../404");
            }
            setChampionData(await fetchChampionData(champion));
        })();}
        catch(e){
            navigate("../404");
        }
    }, []);

    return(championData.data? <ShowDetails championData={championData}/> : <h1>Waiting</h1>)

}