import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import q1 from '../../../assets/class.png'
import q2 from '../../../assets/playground.png'
import q3 from '../../../assets/swimming.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const RightSide = () => {
    const {googleSignin} = useContext(AuthContext)
    const handlegooglesignIn  = () =>{
        googleSignin()
    }
    return (
        <div className=" p-2 ">
            <p className="text-xl font-bold mb-6">Login With </p>
            <div className="mb-10">
                <button onClick={handlegooglesignIn} className="btn btn-outline w-full mb-2 ">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="mb-10">
                <h1 className="text-xl font-bold mb-6">Find Us On</h1>
                <div className="flex items-center gap-3 p-4 border rounded-t">
                    <FaFacebook></FaFacebook>
                    <a href="">Facebook</a>
                </div>
                <div className="flex items-center gap-3 p-4 border-x rounded-t">
                    <FaX></FaX>
                    <a href="">X.com</a>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-b">
                    <FaFacebook></FaFacebook>
                    <a href="">Facebook</a>
                </div>
            </div>
            <div className="mb-10 p-2">
                <h1 className="text-xl font-bold mb-6">Q Zone</h1>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
               
            </div>
        </div>
    );
};

export default RightSide;