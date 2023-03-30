import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCaed/SideCard';

const App = () => {

  const readTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('redTime'));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem('redTime', sum);
      console.log(sum);
    }
    else {
      localStorage.setItem('redTime', time);
    }
  }

  return (
    <div>
      <Header></Header>
      <div className="flex justify-between">
        <Card readTime={readTime}></Card>
        <SideCard></SideCard>
      </div>
    </div>
  );
};

export default App;