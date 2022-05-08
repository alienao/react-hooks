import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from 'react-icons/fa';

// function App(){
//   const [status, setStatus]= useState("Not Delivered");

//   return(
//     <div>
//       <h1>The package is: {status}</h1>
//       <button onClick = {() => setStatus("Delivered")}>Deliver</button>
//     </div>
//   );
// }

// function App(){
//   const [checked, setChecked] = useState(false);

//   return(
//     <div>
//       <input type = "checkbox" value={checked} onChange = {() => setChecked(!checked)}/>
//       <p>{checked ? "checked" : "not checked"}</p>
//     </div>
//   );
// }

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
