// import React from "react";


// const CardContact = (props) => {
//     const {id, img, name, email} = props.contact;

//     return (
//         <div className="item">
//             <div className="content">
//                 <div className="number">{id}</div>
//                 <img className="image" src={img} alt="user" />
//                 <div className="header">{name}</div>
//                 <div>{email}</div>
//                 <i className="trash-can">
//                     <button>
//                         delete
//                     </button>
//                 </i>
//             </div>
//         </div>
//     )
// }

// export default CardContact;

import React from 'react';

function ContactCard({ name, email }) {
  return (
    <div className='item'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ContactCard;

