import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)
    const location = useLocation()
    console.log('location from ogin',location     );
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')

        // user create
        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('Login Successfull !!')
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })

    }

    return (
        <div>
            <Navber></Navber>
            <div className="mt-24">
                <h1 className="text-center text-5xl font-bold  mt-10">Log In Your Account !!</h1>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                    <div>
                        {
                            success && <p className="text-xl text-green-600 text-center">{success}</p>
                        }
                        {
                            error && <p className="text-xl text-red-600 text-center">{error}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;