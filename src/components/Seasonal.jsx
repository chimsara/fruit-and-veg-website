/* This is the seasonal section of the website*/
import { useEffect , useState } from "react";
import styled from "styled-components";

function Seasonal() {
    const [seasonal, setSeasonal] = useState([]);
    const [foodImage, setFoodImage] = useState([]);

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

        function createImage(word) {
            const imageApi = fetch (`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_IMAGE_KEY}&query=${word}`)
            const imageData = imageApi.json();
            setFoodImage(imageData);
            console.log(imageData);
        }

        const api = await fetch('https://fit-life-food.p.rapidapi.com/seasons/summer', options)
        const data = await api.json();
        
        var dataArray = [];
        for (var x = 0; x < 3; x++){
            dataArray.push({
                "name": data[x],
                "id" : x});
        }
        setSeasonal(dataArray);
        console.log(seasonal);
    };

    return (
        <div>
            <Wrapper>
                <h2>Seasonal</h2>
                {seasonal.map((food) => {
                    return(
                        <Card>
                            <div key={food.id}>
                                <p>{food.name}</p>
                                createImage({food.name});
                                <img src={foodImage.urls.regular}/>
                            </div>
                        </Card>
                    );
                })}
            </Wrapper>
        </div>
     );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
`;

export default Seasonal;