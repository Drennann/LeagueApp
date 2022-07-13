export async function fetchChampionData(champion){

    try{
        let res = await fetch("http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/"+champion+".json");
        res = await res.json();
        return res;
    }catch(e){
        throw new Error("Ups");
    }
    
}

export async function fetchAllChampionsData(){
    let res = await fetch("http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json");
    res = await res.json()
    res = Object.keys(res.data);
    return res;
}