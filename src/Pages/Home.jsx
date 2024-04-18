import Agents from "../components/Agents";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Facilities from "../components/Facilities";
import JoinAgent from "../components/JoinAgent";
import Neighborhood from "../components/Neighborhood";
import PropertyBanner from "../components/PropertyBanner";
import Reviews from "../components/Reviews";
import Stats from "../components/Stats";
import Properties from "./Properties";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Properties/>
            <Facilities/>
            <Neighborhood/>
            <PropertyBanner/>
            <Agents/>
            <JoinAgent/>
            <Stats/>
            <Reviews/>
        </div>
    );
};

export default Home;