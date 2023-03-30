import React, { useEffect } from 'react';

const Home = ({ card, readTime }) => {

    // console.log(card);


    return (
        <div className="">
            <div className="">
                <img src={card.blogCoverImg} alt="" />
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="">
                        <img className="w-10 rounded-full" src={card.authorImg} alt="" />
                    </div>
                    <div className="">
                        <h3>{card.author}</h3>
                        <p>{card.publishDate}</p>
                    </div>
                </div>
                <div className="">
                    <p>{card.readTime} read time</p>
                </div>
            </div>
            <h1>{card.title}</h1>
            <button onClick={()=>readTime(card.readTime)} className="btn btn-link">Mark as read</button>
        </div>
    );
};

export default Home;