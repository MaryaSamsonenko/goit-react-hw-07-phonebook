import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../redux/contactsApi";
import { contactsFilterSelector } from "../../redux/contactsFilter";
import { List } from "./ContactList.styled";
import { ContactItem } from "./ContactsItem/ContactsItem";

export const ContactList = () => {
  const { data: contacts, error } = useGetContactsQuery();

  const contactsFilter = useSelector(contactsFilterSelector);

  const getFiltredContacts = () => {
    return contactsFilter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(contactsFilter.toLowerCase())
        )
      : contacts;
  };
  const filtredContacts = getFiltredContacts();

  return (
    <List>
      {contacts &&
        !error &&
        filtredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};
