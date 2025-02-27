import './App.css'
import { useState } from 'react';
import { memo } from 'react';

const App = () => {
  const [count , setCount] = useState(0);
  const handleButton = () => {
    setCount(count+1);
  }
  const MyComponent = memo(({ value }) => {
    return <p>{value}</p>;
});

  const parentComponent = () => {
    return (
      <>
        <button onClick={handleButton}>{count}</button>
        <MyComponent value={count}/>
      </>
    )
  }
  return (
    <>
      <h1>
        <button onClick={handleButton}>{count}</button>
      </h1>
    </>
  );
}

export default App;
