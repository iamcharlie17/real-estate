import Agents from "../components/Agents";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Facilities from "../components/Facilities";
import Neighborhood from "../components/Neighborhood";
import Properties from "./Properties";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Properties/>
            <Facilities/>
            <Neighborhood/>
            <Agents/>
        </div>
    );
};

export default Home;