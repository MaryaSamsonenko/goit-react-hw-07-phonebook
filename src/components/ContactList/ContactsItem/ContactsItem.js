import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useDeleteContactMutation } from "../../../redux/contactsApi";
import { Item, Description, Button } from "./ContactsItem.styled";

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const [deleteContact, { error }] = useDeleteContactMutation();
  const handleDeleteContact = async () => {
    await deleteContact({ id });
    if (error) {
      toast.error("Something went wrong. Please try again");
    }
  };
  return (
    <Item>
      <Description>{name}:</Description> <Description>{phone}</Description>
      <Button type="button" onClick={handleDeleteContact}>
        Delete
      </Button>
    </Item>
  );
};
ContactItem.propType = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
