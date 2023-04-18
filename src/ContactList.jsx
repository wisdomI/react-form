// import React from "react";
// import CardContact from "./ContactCard";


// const ContactList = (props) => {
//     const renderContactList = props.contacts.map((contact) => {
//         return(
//             <CardContact contact = {contact} />
//         );
//     });


//     return (
//         <div>
//             {renderContactList}
//         </div>
//     )
// }



// export default ContactList


import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard key={index} name={contact.name} email={contact.email} />
      ))}
    </div>
  );
}

export default ContactList;
