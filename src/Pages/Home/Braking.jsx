import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Braking = () => {
    return (
        <div className="flex bg-gray-300 p-2 text-black gap-1 mt-7">
            <button className="bg-red-700 px-4 py-1 text-white">Latest</button>
            <Marquee speed={100} pauseOnHover >
                <Link className="mr-6 font-bold" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-6 font-bold" to='/'>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-6 font-bold" to='/'>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default Braking;