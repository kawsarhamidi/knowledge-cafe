import React, { useEffect, useState } from 'react';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Card;