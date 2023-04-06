import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Header  from './Header';
import AddContact from './Addcontact';
import ContactList from './ContactList';





function App()  {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([
      ...contacts, contact
    ])
  }
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  



  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler } />
      <ContactList contacts={contacts}/>
    </div>
  ) 
}


export default App



