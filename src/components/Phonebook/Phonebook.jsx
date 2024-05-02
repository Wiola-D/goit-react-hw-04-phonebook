import { nanoid } from 'nanoid';
import { useState } from 'react';

export const ContactForm = ({ contacts, addContact }) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name.toUpperCase() === nameValue.toUpperCase()
    );

    if (isDuplicate) {
      alert(`${nameValue} is already in contacts!`);
      return;
    }
    const newContact = { name: nameValue, number: numberValue, id: nanoid() };
    addContact(newContact);

    setNameValue('');
    setNumberValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="input"
          name="name"
          id="name"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]*$"
          required
          placeholder="Name"
        />
      </div>
      <div className="container">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          className="input"
          id="number"
          value={numberValue}
          onChange={e => setNumberValue(e.target.value)}
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must start with +"
          required
          placeholder="Number"
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
