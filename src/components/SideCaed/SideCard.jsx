import React, { useEffect, useState } from 'react';

const SideCard = ({readTime}) => {
const [time, setTime] = useState(readTime);
    useEffect(()=>{
       const getReadTimes = localStorage.getItem('readTime');
       console.log(getReadTimes);
        setTime(getReadTimes);
    },[readTime]);
    return (
        <div>
            <p>Spent time one read: {time}</p>
            <p>BookMarked Blogs: </p>
            {/* <h5>Name: {time.map(pd=><p>{pd.author}</p>)}</h5> */}
        </div>
    );
};

export default SideCard;