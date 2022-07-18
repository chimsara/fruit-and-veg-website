import Seasonal from "../components/Seasonal";
import Veg from "../components/Veg";

/*This is the first page you will see on the website */

function Home() {
    return ( 
        <div>
            <Seasonal/>
            <Veg />
        </div>
     );
}

export default Home;