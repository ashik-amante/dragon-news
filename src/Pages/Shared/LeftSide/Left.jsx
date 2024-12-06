import { useEffect, useState } from "react";
import moment from 'moment';
import { Link } from "react-router-dom";



const Left = () => {
    const [category, setCategory] = useState([])
    const [news,setNews] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="border">
            <p>left side </p>
            <div className="p-4 text-center">
                {
                    category.map(cate => <Link to={`/category/${cate.id}`} key={cate.id}>
                        <ul  > <p className="p-2 font-bold hover:bg-gray-400 hover:text-black hover:text-xl rounded mb-2">{cate.name}</p></ul>
                    </Link> )
                }
            </div>
            <div className="mt-10">
                {
                    news.slice(0,4).map(anews=> <div  className="mb-10 space-y-3"  key={anews._id}>
                        <img src={anews.image_url} alt="" />
                        <h1 className="text-xl font-bold">{anews.title}</h1>
                        <div className="flex items-center gap-10">
                            <p>Sports</p>
                            <div className="flex items-center gap-2">
                                <span>icon</span>
                                <p>{moment(anews.author.published_date).format("MMMM D, YYYY")}</p>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Left;