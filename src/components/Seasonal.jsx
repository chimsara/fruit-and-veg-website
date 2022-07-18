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
                'X-RapidAPI-Key': '916d4b8f04msh2f31021b30c0a06p116f31jsnea4544e1a87a',
                'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com'
            }
        };
        
        fetch('https://fit-life-food.p.rapidapi.com/seasons/summer', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
     
    } 

    return (
        <div>Seasonal</div>
     );
}

export default Seasonal;