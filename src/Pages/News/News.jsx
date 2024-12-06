
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSide from '../Shared/RightSide/RightSide';
import Navber from '../Shared/Navber/Navber';
import { FaArrowLeft } from "react-icons/fa6";

const News = () => {
    const allNews = useLoaderData()
    // console.log(allNews);
    const { id } = useParams()
    // console.log(typeof (id));
    const news = allNews.find(news => news._id === id)
    // console.log(news);
    return (
        <div>
            <Header> </Header>
            <Navber></Navber>
            <h1 className='font-bold text-xl'>Dragon News</h1>
            <div className='grid grid-cols-4 gap-4'>
                <div className='grid col-span-3 border p-8'>
                    <div>
                        <img className='mb-5' src={news.image_url} alt="" />
                        <h2 className='text-xl font-bold mb-2'>{news.title}</h2>
                        <p>{news.details}</p>
                        <div  className='mt-8'>
                            <Link to='/'><button className='bg-[#D72050] px-6 py-2 text-white'> <span className='flex items-center gap-3'><FaArrowLeft /> All news in this category</span> </button></Link>
                        </div>
                    </div>

                </div>
                <div className='grid col-span-1 border'>
                    <RightSide> </RightSide>
                </div>

            </div>
        </div>
    );
};

export default News;