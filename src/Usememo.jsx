import { useState,useMemo } from "react";
import ReactDOM from "react-dom/client";

export default function Usememo(){
  const [count, setCount] = useState(0);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  
  return (
    <div>
     
     
      <div>
        Count: {count}
        <button onClick={()=>increment()}>+</button>
        <h2>Let's increment</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Usememo />);


//creaete two components , comp 1