import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";

export const App = () => {
  return (
    <>
      <ContactForm/>
      <ContactsFilter/>
      <ContactList/>
    </>
  );
};
