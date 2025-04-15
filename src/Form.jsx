// // // Event Object

// function handleFormSubmit(event) {
//     event.preventDefault();
//     console.log("Form was submitted");
// }

// export default function Form() {   
//     return (
//         <form onSubmit={handleFormSubmit}>
//             <input placeholder="write something" />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }



function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was Submitted");
}


export default function Form() {
    return(
            <form onSubmit={handleFormSubmit}>
            <input placeholder="Write Something"></input>
            <button type="submit">Submit</button>
            </form>
    );
}