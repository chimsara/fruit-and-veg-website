import Seasonal from "../components/Seasonal";
import Veg from "../components/Veg";
import "../styles/Home.css"


/*This is the first page you will see on the website */

function Home() {
    return ( 
        <div class="home-page-categories">
            <Seasonal/>
            <Veg />
        </div>
     );
}

export default Home;