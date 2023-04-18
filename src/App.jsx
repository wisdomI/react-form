// import './App.css';
// import { useState, useEffect } from 'react';
// import React from 'react';
// import Header  from './Header';
// import AddContact from './Addcontact';
// import ContactList from './ContactList';


// function App()  {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState([]);

//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([
//       ...contacts, contact
//     ])
//   }
  
//   useEffect(() => {
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if(retriveContacts) setContacts(retriveContacts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
//   }, [contacts]);

  



//   return (
//     <div>
//       <Header />
//       <AddContact addContactHandler={addContactHandler } />
//       <ContactList contacts={contacts}/>
//     </div>
//   ) 
// }


// export default App



import React, { useEffect, useState } from 'react';
import AddContact from './Addcontact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, email) => {
    const newContact = { name, email };
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  return (
    <div>
      <AddContact onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
