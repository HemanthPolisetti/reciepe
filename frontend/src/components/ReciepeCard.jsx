import React, { useEffect, useState } from 'react';
import  {useNavigate}  from 'react-router-dom';
import img3 from '../assets/r-1.jpg';
import axios from 'axios';

const ReciepeCard = ({uri}) => {
    const [reciepeData, setReciepesData] = useState();
    const history = useNavigate();

    const fetchReciepes = async () => {
        const res = await axios.get(uri);
        const data = res.data.data;
        setReciepesData((prev) => ({ ...prev, data }));
    };

    const handleClick = (id) => {
        history(`/recipe/${id}`)
    };

    useEffect(() => {
        fetchReciepes();
    }, []);

    return (
        <div>
            {reciepeData &&
                reciepeData.data.map((data, i) => (
                    <div>
                        <div
                            className='bg-yellow-300 flex mx-4 rounded-xl my-2 cursor-pointer'
                            key={i}
                        >
                            {data.image ? (
                                <img src={data.image} alt='reciepe'                                   
                              className='w-36 h-36 rounded-lg mx-4 object-cover my-4'
                                />
                            ) : (
                                <img
                                    src={img3}
                                    alt='img'
                                    className='w-36 h-36 rounded-lg mx-4 object-cover my-4'
                                />
                            )}
                            <div className='flex justify-between w-full'>
                                <div className='font-bold text-2xl mx-4 my-4'>
                                    {data.title}
                                </div>
                                <button
                                    className='font-bold text-2xl mx-4 my-4'
                                    onClick={() => handleClick(data._id)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ReciepeCard;