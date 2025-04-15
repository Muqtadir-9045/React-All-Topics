// useEffect 

// import { useState , useEffect } from "react";

// export default function Counter() {
//     let [count, setCount] = useState(0);

//     let incCount = () => {
//     setCount(count + 1);
//         // setCount((currCount) => currCount + 1);
//     };

//     useEffect(function printSomething() {
//         console.log("This is a side Efect");
//     });
//     //By default, useEffect runs its callback function after every render of your component

//     return (
//         <div>
//             <h3>count = {count}</h3>
//             <button onClick={incCount}>+1</button>
//         </div>
//     );
// }



// Dependencies in useEffect 

import { useState , useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx((currCount) => currCount + 1);
    };

    let incCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

//     useEffect(function printSomething() {
//         console.log("This is a side Efect");
//     },[countx] );

//     useEffect(function printSomething() {
//         console.log("This is a side Efect");
//     },[county] );

//     useEffect(function printSomething() {
//         console.log("This is a side Efect");
//     },
//     [countx , county]
// );


        useEffect(function printSomething() {
        console.log("This is a side Efect");
    },[] );

    return (
        <div>
            <h3>countx = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>county = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}











//Practise  Dependencies
 
// import { useState , useEffect } from "react";

// export default function Countertwo() {
//     let [countx , setCountx] = useState(0);
//     let [county , setCounty] = useState(0);

//     let incCountx =() => {
//         setCountx(countx+1);
//     }

//     let incCounty =() => {
//         setCounty(county+1);
//     }

//     useEffect(function printSomethin() {
//         console.log("This is a side Effect");
//     } , [countx]);
//     return(
//         <div>
//             <h3>Count x = {countx}</h3>
//             <button onClick={incCountx}>Click</button>
//             <h3>Count y = {county}</h3>
//             <button onClick={incCounty}>CLick For Y</button>
//         </div>
//     );
// }




