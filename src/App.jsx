import React, { useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCaed/SideCard';

const App = () => {

  const [readTime, setReadTime] = useState('');

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem('readTime', sum);  
      setReadTime(sum);
    }
    else {
      localStorage.setItem('readTime', time);
      setReadTime(time);
    }
  }

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2">
        <Card handleReadTime={handleReadTime}></Card>
        <SideCard readTime={readTime}></SideCard>
      </div>
    </div>
  );
};

export default App;