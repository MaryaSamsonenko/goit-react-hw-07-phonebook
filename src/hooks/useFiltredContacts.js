import { useSelector } from "react-redux";
import {
  contactsFilterSelector,
  useGetContactsQuery,
} from "../redux/contactsApi";

export const useFiltredContacts = () => {
  const { data: contacts, error } = useGetContactsQuery();
  const contactsFilter = useSelector(contactsFilterSelector);
  const filtredContacts = contactsFilter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(contactsFilter.toLowerCase())
      )
    : contacts;

  return { filtredContacts, error };
};
