import { useFiltredContacts } from "../../hooks/useFiltredContacts";
import { List } from "./ContactList.styled";
import { ContactItem } from "./ContactsItem/ContactsItem";

export const ContactList = () => {
  const { filtredContacts, error } = useFiltredContacts();

  return (
    <List>
      {filtredContacts &&
        !error &&
        filtredContacts?.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};
