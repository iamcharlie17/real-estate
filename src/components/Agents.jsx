import { useEffect, useState } from "react";
import { LiaLinkedinIn } from "react-icons/lia";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("agents.json")
      .then((r) => r.json())
      .then((data) => setAgents(data));
  }, []);

  console.log(agents);

  return (
    <div className="md:p-16 p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#3fb89a]">EXPERTISE IS HERE</h1>
        <h1 className="text-3xl font-semibold">Our Exclusive Agents</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {agents.map((a, idx) => (
          <div key={idx} className="p-4 md:p-8 shadow-lg rounded-lg space-y-4">
            <div className="flex justify-center relative ">
              <img src={a.photo} alt="" />
              <div className="px-2 py-1 absolute bottom-4 left-4 bg-white rounded-lg hover:bg-[#3fb89a] ">
                <button className="hover:text-white text-[#3fb89a]">{a.listings} Listings</button>
              </div>
              <div className=" absolute right-0 ">
                <a href="">
                  {" "}
                  <h1 className="text-white p-4  rounded-full bg-[#3fb89a] hover:bg-[#398572]">
                    <LiaLinkedinIn />
                  </h1>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-semibold">{a.name}</h1>
              <h1>{a.company_name}</h1>
              <h1>call: {a.cell_number}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
