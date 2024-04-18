import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;