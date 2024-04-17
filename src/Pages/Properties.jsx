import { useEffect, useState } from "react";
import Property from "../components/Property";
import { NavLink } from "react-router-dom";


const Properties = () => {
    
    const [properties, setProperties] = useState([]);

    useEffect(()=>{
        fetch('properties.json')
        .then(r => r.json())
        .then(data => setProperties(data));
    },[])
    // console.log(properties);

    return (
        <div className="bg-[#e7f9f4] -z-20 px-4 py-8 md:px-16 md:py-20">
            <div className="flex items-center justify-between md:flex-row flex-col text-center md:text-start gap-8">
                <div>
                    <h1 className="text-2xl text-[#3fb89a] font-bold">Our Properties</h1>
                    <h1 className="text-3xl font-bold">Latest Properties</h1>
                </div>
                <div className="">
                    <NavLink className={`px-4 py-2 rounded-full mr-2 md:mr-4 border-2 border-[#3fb89a] hover:bg-[#3fb89a] hover:text-white`}>All Types</NavLink>
                    <NavLink className={`px-4 py-2 rounded-full mr-2 md:mr-4 border-2 border-[#3fb89a] hover:bg-[#3fb89a] hover:text-white`}>For Sell</NavLink>
                    <NavLink className={`px-4 py-2 rounded-full mr-2 md:mr-4 border-2 border-[#3fb89a] hover:bg-[#3fb89a] hover:text-white`}>For Rent</NavLink>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
                {
                    properties.map(property => <div key={property.id}><Property property={property}/></div>)
                }
            </div>
        </div>
    );
};

export default Properties;