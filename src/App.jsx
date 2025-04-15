 // Serial Number 1

// import './App.css'

// function Title() {
//   return <h1>Hello World</h1>;
// }

// export default Title;












// Serial Number 2

// import './App.css'

// function Title() {
//   return <h1>Hello World</h1>;
// }

// function App() {
//   return (
//     <div>
//     <h1>This is my app component</h1>
//     <p>Inside app component we have : </p>
//     <Title/>
//     </div>
//   );
// }

// export default App;















// Serial Number 3 A
//JSX with Curly Braces

// import "./App.css";
// import Title from "./Title.jsx";


// function App() {
//   return (
//     <div>
//       <Title/>
//       <Title/>
//       <Title/>
//     </div>
//   );
// }

// export default App; 





















// Serial Number 3 B
//JSX with Curly Braces

// import "./App.css";
// import Title from "./Title.jsx";

// function App() {
//   return (
//     <div>
//       <Title/>
//       <Title/>
//       <Title/>
//     </div>
//   );
// }

// export default App; 













//Serial no 5 A
//Structuring Component

// import "./App.css";
// import Product from "./Product.jsx";

// function App() {
//   return (
//     <div>
//       <Product/>
//       <Product/>
//       <Product/>
//     </div>
//   );
// }

// export default App; 














//Serial Number 5B
//Structuring Component

// import "./App.css";
// import ProductTab from "./ProductTab.jsx";


// function App() {
//   return<ProductTab />;
// }

// export default App; 


 





//Serial Number 6
//Style Component

// import "./App.css";
// import Product from "./Product.jsx";


// function App() {
//   return (
//         <div>
//           <Product/>
//           <Product/>
//           <Product/>
//         </div>
//       );
// }

// export default App;





 









//Serial No : 7
//1 React Props
//2 Passing Array to props
//3 Rendering Arrays           //Revision is Pending
//4 Conditional Statement 
//5 Dynamic Component Styling    Price > 30000 Give Background Color Pink 





// import "./App.css";
// import ProductTab from "./ProductTab.jsx";   // Importing ProductTab component

// function App() {
//   return (
//     <div>
//       <ProductTab />   {/* Rendering the ProductTab component */}
//     </div>
//   );
// }

// export default App;









// Flow of the Application
// App.jsx renders the ProductTab component.
// ProductTab.jsx renders multiple Product components with different data (title and price).
// Product.jsx displays each product's title and price in a styled div using CSS from Product.css.
















//Serial No : 8
//Activity(Practise Qs)
 


// import "./App.css";
// import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox";

// function App() {
//   return (
//     <>
//       <MsgBox userName="Muqtadir" textColor="yellow" />
//       <MsgBox userName="Abdul" textColor="green" />
//       <ProductTab />
//     </>
//   );
// }

// export default App;








//Lecture 8   Amazon Card       

//Revision is Remaining


// import "./App.css";
// import ProductTab from "./ProductTab.jsx";

// function App() {
//   return (
//     <>
//           <h2>Blockbuster Deals | Shop Now </h2>
//     <ProductTab />
//     </>
//   );
// }

// export default App;











//HANDLING CLCIK EVENT

// import "./App.css";
// import Button from "./Button.jsx";

// function App() {
//   return(
//     <div>
//       <Button />
//     </div>
//   );
// }

// export default App;









//Event Object

// import "./App.css";
// import Form from "./Form.jsx";  

// function App() {
//     return (
//         <div>
//             <Form />   
//         </div>
//     );
// }

// export default App;


//Use state

// import "./App.css";
// import Counter from "./Counter.jsx"
// function App() {
//     return (
//         <div>
//           <h1>State in Counter</h1>
//             <Counter />   
//         </div>
//     );
// }

// export default App;











//Create Like Button          //Revision is Pending


// import "./App.css";
// import LikeButton from "./LikeButton.jsx";

// function App() {
//     return (
//         <div>
//           <p>State in Counter</p>
//             <LikeButton />   
//         </div>
//     );
// }

// export default App;








//Create Todo List         //Revision is Pending


// import "./App.css";
// import TodoList from "./TodoList.jsx";

// function App() {
//     return (
//         <div>
//             <TodoList />   
//         </div>
//     );
// }

// export default App;




// Create a Lottery Ticket

// import "./App.css";
// import Lottery from "./Lottery.jsx";

// function App() {
//     return (
//         <div>
//             <Lottery />   
//         </div>
//     );
// }

// export default App;





 //Revision is Pending
//Ticket 
//Generate Many ticket number 
//For only One Ticket 
//Output : 524309


// import "./App.css";
// import TicketNum from "./TicketNum.jsx";

// function App() {
//     return (
//         <div>
//             <TicketNum num={5} /> 
//             <TicketNum num={2} />   
//             <TicketNum num={4} />
//             <TicketNum num = {3} />
//             <TicketNum num = {0} />
//             <TicketNum num = {9} />     
//         </div>
//     );
// }

// export default App;




 //Revision is Pending


//Ticket 
//Generate Many ticket number 
//For Many Ticket 
//Output : 012
//Output : 0345
//Output : 26050
//Output : 193985



// import "./App.css";
// import Ticket from "./Ticket.jsx";

// function App() {
//     return (
//         <div>
//             <Ticket ticket = {[0 , 1 , 2]} />
//             <Ticket ticket = {[0 , 3 , 4, 5, ]} />   
//             <Ticket ticket = {[2 , 6 , 0, 5, 0]} />   
//             <Ticket ticket = {[1 , 9 , 3, 9, 8, 5]} />      
//         </div>
//     );
// }

// export default App;




 







// import "./App.css";
// import Formtwo from "./Formtwo.jsx";

// function App() {
//     return (
//         <div>
//             <Formtwo />   
//         </div>
//     );
// }

// export default App;




//Revision is Pending 

// import "./App.css";
// import CommentsForm from "./CommentsForm";

// function App() {
//     return (
//         <div>
//             <CommentsForm />   
//         </div>
//     );
// }

// export default App;












//useEffect
//Dependencies in useEffect 


// import "./App.css";
// import Countertwo from "./Countertwo.jsx";

// function App() {
//     return (
//         <div>
//             <Countertwo />   
//         </div>
//     );
// }

// export default App;








//Use Cases 
//Bring it a joke using Fetch API 

import "./App.css";
import Joker from "./Joker.jsx";

function App() {
    return (
        <div>
            <Joker />   
        </div>
    );
}

export default App;





