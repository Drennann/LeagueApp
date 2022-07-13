import {useParams} from "react-router-dom";
import "./ChampionPage.css"

import ChampionDetails from "../components/ChampionDetails";

export default function ChampionPage() {

    let params = useParams();

    return( <div id="ChampionPage">
                <div className="Filter">
                    <ChampionDetails champion={params.champion}/>
                </div>
            </div>)
}
