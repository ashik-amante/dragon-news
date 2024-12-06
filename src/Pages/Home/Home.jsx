import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Left from "../Shared/LeftSide/Left";
import Navber from "../Shared/Navber/Navber";
import RightSide from "../Shared/RightSide/RightSide";
import Braking from "./Braking";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";


const Home = () => {
    const [allNews, setAllnews] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setAllnews(data))
    }, [])

    //  Or we can use useLoader data instade of use effect . have to set loader in route 
    return (
        <div>
            <Header></Header>
            <Braking></Braking>
            <Navber></Navber>
            <div className="grid lg:grid-cols-4">
                <div className="grid col-span-1">
                    <Left></Left>
                </div>
                <div className="grid col-span-2">
                    {
                        allNews.map(news => <div key={news._id}>
                            <div className="space-y-5 mb-10 p-2 mt-2">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-6" >
                                        <img className="w-12 rounded-full" src={news.author.img} alt="" />
                                        <div className=" items-center">
                                            <p className="font-bold">{news.author.name}</p>
                                            <p>{news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-2xl gap-4 mr-4 ">
                                        <p><CiBookmark /></p>
                                        <p><CiShare2 /></p>
                                    </div>
                                </div>
                                <p className="text-xl font-bold">{news.title}</p>
                                <img src={news.image_url} alt="" />
                                <p>{news.details.length > 200 ? news.details.slice(0,200) : news.details}...</p>
                                <Link to={`/news/${news._id}`}><p className="text-orange-400">Read more</p></Link>
                               
                            </div>
                        </div>)
                    }
                </div>
                <div className="grid col-span-1">
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default Home;