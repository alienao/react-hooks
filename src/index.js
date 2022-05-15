import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import { FaStar } from 'react-icons/fa';

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

// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} of {totalStars}
//       </p>
//     </>
//   );
// }

// function App() {
//   return <StarRating totalStars={10} />;
// }

// function App() {
//   const [name, setName] = useState("Adam");
//   const [admin, setAdmin] = useState(false);

//   useEffect(()=>{
//   //  document.title=`Celebrate ${name}`
//   console.log(`Celebrate ${name}`);
//   }, [name]);

//   useEffect(()=>{
//     console.log(`The user is: 
//       ${admin ? "admin" : "not admin"}`);
//     }, [admin]);

//   return (
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick = {()=>{setName("Niki")}}>Change Winner</button>
//       <p>{admin ? "logged in" : "not logged in"}</p>
//       <button onClick = {()=>{setAdmin(true)}}>Log In </button>
//     </section>
//     );
// }

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData);
  }, [])

  if(data){
    return(
      <div>
        <ul>
          {data.map((user)  => (
            <li key = {user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick = {() => {setData([])}}>Remove Data</button>
      </div>
    
    );
  }

  return <p>No Users</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
