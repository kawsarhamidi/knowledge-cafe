import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';


const Card = ({readTime}) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div>
            {
                cards.map((card) =>(
                    <Home key={card.id} readTime={readTime} card={card}></Home>
                ))
            }
        </div>
    );
};

export default Card;