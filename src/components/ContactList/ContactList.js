import { useSelector } from "react-redux";
import { ContactItem } from "./ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";
import { useGetContactsQuery } from "../../redux/contactsApi";
// import { contactsFilterSelector } from "../../redux/contactsFilter";

export const ContactList = () => {
  const { data: contacts, error } = useGetContactsQuery();
  console.log(contacts);
  const contactsFilter = useSelector((state) => state.filter.value);
  // export const ContactList = () => {
  //   const contacts = useSelector(contactsSelector);
  //   const contactsFilter = useSelector(contactsFilterSelector);
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
      {filtredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
