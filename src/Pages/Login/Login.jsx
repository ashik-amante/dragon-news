import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";


const Login = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="mt-24">
                <h1 className="text-center text-5xl font-bold  mt-10">Log In Your Account !!</h1>
                <form className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-[#403F3F]">Login</button>
                    </div>
                    <div>
                        <p className="text-center mr-3">Do Not have an account ? <Link to='/register'><button className="text-blue-600 font-bold ml-2">Register</button></Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;