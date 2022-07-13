import "./ShowDetails.css"

export default function ShowDetails({championData}){

    let champion = Object.keys(championData.data);

    let data = championData.data[champion[0]];

    let backGround = document.getElementById("ChampionPage");
    backGround.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.name}_0.jpg)`;

    return( <table>
                <thead>
                    <tr>
                        <td><img src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${data.name}.png`} height="100px" width="100px" alt="ChampionImage"/></td><td>{data.name}</td><td>{data.title}</td><td>Ability Cost</td><td>Cooldown(Seconds)</td>
                    </tr>
                </thead>
                <tbody>
                    {data.spells.map( h => {
                        return (<tr key={h.id}><td><img src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${h.image.full}`} height="70px" width="70px" alt="ChampionSpell"/></td><td>{h.name}</td><td>{h.description}</td><td>{h.costBurn}</td><td>{h.cooldownBurn}</td></tr>)
                    })}
                </tbody>
            </table>)
}