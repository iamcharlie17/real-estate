import { useLoaderData, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const id = useParams();


  const property = properties.find(p => p.id == id.id);

  const {
    area,
    description,
    estate_title,
    facilities,
    image,
    location,
    price,
    segment_name,
    status,
  } = property;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pt-32 min-h-screen border-2 border-red-400">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="space-y-4">
        <h1 className=" text-xl md:text-4xl lg:text-6xl font-bold">
          {estate_title}
        </h1>
        <h1 className="font-semibold text-white bg-[#3fb89a] w-1/3 text-center rounded-lg ">
          {segment_name}
        </h1>
        <small>{description}</small>
        <div className="flex items-center gap-16">
          <ul>
            <h1 className="uppercase text-2xl font-semibold">Facilities</h1>
            {facilities.map((f, idx) => (
              <li className="flex gap-2 items-center pl-8" key={idx}>
                <FaCheck></FaCheck>
                {f}
              </li>
            ))}
          </ul>
          <div>
            <h1>Location: {location}</h1>
            <h1>Area: {area}</h1>
            <h2 className="uppercase">
              {status}: {price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
