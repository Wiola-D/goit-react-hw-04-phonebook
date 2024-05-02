export const ContactList = ({ contacts, filteredContacts, removeContact }) => {
  return (
    <div>
      {filteredContacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(contact => (
              <tr key={contact.id}>
                <td className="liName">{contact.name}: </td>
                <td>{contact.number}</td>
                <td>
                  <button
                    className="buttonDelete"
                    onClick={() => removeContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="noContacts">No contacts</p>
      )}
    </div>
  );
};
