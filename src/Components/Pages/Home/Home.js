import React from 'react';
import './Home.css'
import bg from '../../../image/pizza_bg.jpg'
import logo from '../../../image/logo-01.png'

const Home = () => {
    return (
        <div>
            <div className='bg-img'>
                <img className='' src={bg} alt="" />
            </div>
            <div className='text-start '>
                    <h2  className='text-white text-9xl font-bold absolute top-1/4 inset-x-0 ml-40'>
                    Pizza Land...
                    </h2>
                    <img className='w-40 absolute top-10 right-10' src={logo} alt="" />
                    <p className='text-2xl text-gray-200 absolute top-2/4 inset-x-0 w-1/2 ml-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cum ea quaerat iste laborum nam eveniet animi ex illo odio.</p>
            </div>
            <div className='text-2xl text-gray-200 absolute top-3/4 left-1/4 w-1/2 '>
                <button className="btn btn-outline btn-warning text-3xl">Explore Pizzas</button>
            </div>
        </div>
    );
};

export default Home;