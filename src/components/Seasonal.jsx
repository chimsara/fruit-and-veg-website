/* This is the seasonal section of the website*/

import { useEffect } from "react";

function Seasonal() {

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

        const api = await fetch('https://fit-life-food.p.rapidapi.com/seasons/summer', options)
        const data = await api.json();
        console.log(data);
    } 

    return (
        <div>Seasonal</div>
     );
}

export default Seasonal;