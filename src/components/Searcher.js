import {useNavigate} from "react-router-dom"

import "./Searcher.css";

export default function Searcher(){

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        let champion = e.target[0].value;
        let destino = "../"+champion;
        navigate(destino);
    }

    return( <form className="Searcher" onSubmit={handleSubmit}>
                <input type="text" placeholder="Choose a champion"></input>
                <button>Search</button>
            </form>)
}