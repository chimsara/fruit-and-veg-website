/* This is the seasonal section of the website*/
import { useEffect , useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Seasonal.css"

function Seasonal() {
    const [seasonal, setSeasonal] = useState([]);

    /*Get the Seasonal items when page loads*/
    useEffect( () => {
        getSeasonal();
    }, []);

    //Fetch the seasonal 
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
        
        var dataArray = [];
        for (var x = 0; x < 10; x++){
            dataArray.push({
                "name": data[x],
                "id" : x});
        }
        setSeasonal(dataArray);
        console.log(seasonal);
    };
    
    //Fetch the pictures 
    const getSeasonalPictures = async () => {
        const apiPic = await fetch(`https://spoonacular.com/cdn/ingredients_250x250/apple.jpg?apiKey=${process.env.REACT_APP_API_KEY_PICTURES}`);
        const dataPic = await apiPic.json();
        console.log(dataPic);
    };


    return (
        <div class="seasonal">
            <h2 id="seasonal__title">Seasonal</h2>
            <div class="seasonal__list">
                <Splide options={
                {perPage: 5, arrows:true, pagination:false, drag:"free", gap:"5px",}}>
                    {seasonal.map((food) => {
                        return(
                            <SplideSlide>
                                <div key={food.id} class="seasonal__card">
                                    <p id="seasonal__name">{food.name}</p>
                                    <img src={"https://spoonacular.com/cdn/ingredients_250x250/" + food.name.toLowerCase() + ".jpg"} 
                                    alt={food.name} id="seasonal__image"/>
                                </div>
                            </SplideSlide> 
                        );
                    })}
                </Splide>
            </div>                
        </div>
     );
}

export default Seasonal;