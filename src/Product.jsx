//Serial no 5 A
//Structuring Component


// function Product() {
//     return (
//         <div>
//             <h3>Product Title</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }

// export default Product;





//Serial no 5B
//Structuring Component


// function Product() {
//     return (
//         <div>
//             <h3>Product Title IS</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }

// export default Product;






//Serial no 6
//Style Component


// import "./Product.css";

// function Product() {
//     return (
//         <div className="Product">
//             <h3>Product Title</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }


// export default Product;  

























//Serial No : 7
//1 . React Props ,    //4 Conditional Statement   

// import "./Product.css";    // Importing styles from Product.css

// function Product({ title, price}) {
//     return (
//         <div className="Product">
//             <h3>{title}</h3>        {/* Displaying product title */}
//             <h5>Price: {price}</h5>        {/* Displaying product price */}
//             {price > 30000 ? <p>"Discount of 5 %"</p> : null}              {/*4 Conditional Statement*/}     
//         </div>
//     );
// }

// export default Product; 



//Serial No : 7
// 5 DYnamic Compnent Styling 
//Easy Way 


// import "./Product.css";    // Importing styles from Product.css

// function Product({ title, price}) {
 
//  let styles = {backgroundColor : price > 30000 ? "pink" : ""};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>        {/* Displaying product title */}
//             <h5>Price: {price}</h5>        {/* Displaying product price */}
//            {price > 30000 ? <p>"Discount of 5 %"</p> : null} 
//         </div>
//     );
// }

// export default Product;




//Serial No : 7
// 5 DYnamic Compnent Styling 
//Hard Way 

// import "./Product.css";    // Importing styles from Product.css

// function Product({ title, price}) {
//     let isDiscount = price > 30000;
//     let styles = {backgroundColor : isDiscount ? "pink" : ""};
//     //better Understanding 
// // let styles = {backgroundColor : price > 30000 "pink" : ""};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>        {/* Displaying product title */}
//             <h5>Price: {price}</h5>        {/* Displaying product price */}
//             {isDiscount ? <p>"Discount of 5 %"</p> : null}
//             {/* better Understanding below  */}
//             {/* {price > 30000 ? <p>"Discount of 5 %"</p> : null} */}
//         </div>
//     );
// }

// export default Product; 








//Serial No : 7
// 2 Passing Array to props

// import "./Product.css";    // Importing styles from Product.css

// function Product({ title, price ,features}) {
//     return (
//         <div className="Product">
//             <h3>{title}</h3>        {/* Displaying product title */}
//             <h5>Price: {price}</h5>       {/* Displaying product price */}
//             <p>{features}</p> 

//         </div>
//     );
// }

// export default Product;   


//Serial No : 7
//3 Rendering Arrays
 //Revision is Pending

 

// import "./Product.css";     

// function Product({ title, price , features}) {
//     return (
//         <div className="Product">
//             <h3>{title}</h3>       
//             <h5>Price: {price}</h5>        
//             <p>
//                 {features.map((feature) => (
//                     <li>{feature}</li>
//                     ))}
//             </p> 
//         </div>
//     );
// }

// export default Product;         





//Serial No : 7A   joint with ProductTab and App in serial No : 7

// import "./Product.css"; 
// function Product({ title, price }) {
//   let styles = {backgroundColor : price > 30000 ? "pink" : ""};
//   return (
//     <div className="Product" style = {styles}>
//       <h3>{title}</h3>    
//       <h5>Price: {price}</h5>    
//       {price > 30000 ? <p>"Discount of 5% : "</p> : null}
//     </div>
//   );
// }

// export default Product; 











//Lecture 8   Amazon Card 
//Remaining Revision




// import "./Product.css"; 
// import Price from "./Price";

// function Product({ title , idx }) {
//     let oldPrices = ["12,495", "11,900", "1,599", "599"];
//     let newPrices = ["8,999", "9,199", "899", "278"];
//     let description = [
//         ["8,000 DPI","5 Programmable Buttons"],
//         ["intuitive surface","designed for Ipad Pro"],
//         ["designed for Ipad Pro","intuitive surface"],
//         ["Wireless","Optical Orientation"],
//     ];
//   return (
//     <div className="Product" >
//     <h4>{title}</h4>
//     <p>{description[idx][0]}</p>
//     <p>{description[idx][1]}</p>
//         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
//     </div>
//   );
// }

// export default Product; 













 