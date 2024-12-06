import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        const name= form.get('name')
        console.log(email,password,name);
        // user create
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('Register Successfull !!')
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
                <h1 className="text-center text-5xl font-bold  mt-10">Register Your Account !!</h1>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                    </div>
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p className="text-center mr-3">Already have an account ? <Link to='/login'><button className="text-blue-600 font-bold ml-2">Log In</button></Link> </p>
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

export default Register;