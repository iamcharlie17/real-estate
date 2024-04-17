import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  
    const navigate = useNavigate();
    const {updateUser} = useContext(AuthContext)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
  
    const onSubmit = (data) => {
        console.log(data.number)
    
      updateUser(data.name, data.image, data.number)
      .then(()=>{
        toast("Profile updated", {
            duration: 1500,
            style: {
              background: "#3fb89a",
              color: "white",
            },
          });
          navigate('/')
      })
      .catch(e=>{
        toast(`${e.message}`, {
            duration: 1500,
            style: {
              background: "#3fb89a",
              color: "red",
            },
          });
      })
      
    };
  return (
    <div className="min-h-screen py-32 mx-2">
      <div className=" hover:scale-105 transition-transform w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl bg-[#3fb89a] text-white shadow-xl shadow-blue-400">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md  text-black focus:border-violet-400"
            />
            {errors.name && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="image" className="block ">
              Photo URL
            </label>
            <input
              {...register("image")}
              type="text"
              name="image"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-md text-black focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-[#0A4781]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
