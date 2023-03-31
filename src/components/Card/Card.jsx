import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';


const Card = ({handleReadTime}) => {

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
                    <Home key={card.id} handleReadTime={handleReadTime} card={card}></Home>
                ))
            }
        </div>
    );
};

export default Card;