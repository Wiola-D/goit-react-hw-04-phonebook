import { useEffect, useState } from 'react';
import { ContactForm } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('phonebookContacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const addContact = event => {
    const newContacts = [...contacts, event];
    setContacts(newContacts);
    localStorage.setItem('phonebookContacts', JSON.stringify(newContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const removeContact = id => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== id);
      localStorage.setItem(
        'phonebookContacts',
        JSON.stringify(updatedContacts)
      );
      return updatedContacts;
    });
  };

  return (
    <div className="Phonebook">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <Filter filterValue={filter} setFilterValue={setFilter} />
      <h2>Contacts</h2>

      <ContactList
        contacts={contacts}
        filteredContacts={filteredContacts}
        removeContact={removeContact}
      />
    </div>
  );
};
