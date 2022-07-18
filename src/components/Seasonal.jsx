/* This is the seasonal section of the website*/

import { useEffect , useState } from "react";

function Seasonal() {
    const [seasonal, setSeasonal] = useState([]);

    /*Get the Seasonal items when page loads*/
    useEffect( () => {
        getSeasonal();
    }, []);

    /*Fetch the seasonal */
    const getSeasonal = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
                'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com'
            }
        };

        const api = await fetch('https://fit-life-food.p.rapidapi.com/seasons/summer?number=3', options)
        const data = await api.json();
        
        var dataArray = [];
        for (var x = 0; x < 10; x++){
            dataArray.push({
                "name": data[x],
                "id" : x});
        }
        setSeasonal(dataArray);
        console.log(seasonal);
    };

    return (
        <div>
            <h2>Seasonal</h2>
            <div>
                {seasonal.map((food) => {
                    return(
                        <div key={food.id}>
                            <p>{food.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}

export default Seasonal;