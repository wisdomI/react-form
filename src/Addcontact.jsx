// import React from "react";

// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: "",
//     }

//     add = (e) => {
//         e.preventDefault();
//         if(this.state.name === " " || this.state.email === " ") {
//             alert ("All fields are required")
//             return
//         };
        
//         this.props.addContactHandler(this.state);
//         this.setState({name: "", email: ""});
//         console.log(this.state);
//     } 
    
        
//     render () {
//         return (
//             <div className="form-wrapper">
//                 <h2>
//                     Add Contact
//                 </h2>
                
//                 <form 
//                     action="" 
//                     className="form"
//                     onSubmit={this.add}>

//                     <div className="field">
//                         <label htmlFor="">Name</label>
//                         <input 
//                             type="text"    
//                             name="name" 
//                             placeholder="Name"
//                             value={this.state.name} 
//                             onChange={ (e) => this.setState({name: e.target.value})} 
//                         />
//                     </div>
//                     <div className="field">
//                         <label htmlFor="">Email</label>
//                         <input 
//                             type="text" 
//                             name="Email" 
//                             placeholder="Email"
//                             value={this.state.email}  
//                             onChange={ (e) => this.setState({email: e.target.value})}
//                         />
//                     </div>
//                     <button className="add-btn" type="submit">
//                         Add
//                     </button>
//                 </form>
//             </div> 
//         )
//     }
// }

// export default AddContact

import React, { useState } from 'react';

function AddContact({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, email);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
