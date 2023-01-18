import FormPhonebook from './FormPhonebook/FormPhonebook';
import Filter from './Contacts/Filter';
import Contacts from './Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <h1 style={{ marginLeft: '50px' }}>Phonebook</h1>
      <FormPhonebook />
      <h2 style={{ marginLeft: '50px' }}>Contacts</h2>
      <Filter />

      {/* {items.length === 0 ? (
        <p style={{ marginLeft: '30px' }}>There are no contact</p>
      ) : ( */}
      <Contacts />
      {/* )} */}
    </div>
  );
};
