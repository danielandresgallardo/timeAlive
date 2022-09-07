import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Main from './components/Main';

function showDate(date){
  return(
    <text>{date.getHours}</text>
  )
}

function showD(active){
  console.log(active);
  active = true;
  console.log(active);
}

function App() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',}}>
    <Main/>
    </div>
  );
}

export default App;
