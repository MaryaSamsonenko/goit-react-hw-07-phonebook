import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useSelector, useDispatch } from "react-redux";
// import { nanoid } from "nanoid";
// import { addContact } from "../../redux/contacts";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/contactsApi";

// import { contactsSelector } from "../../redux/contacts";
import { FormContact, Label, Input, ButtonSubmit } from "./ContactForm.styled";

export const ContactForm = () => {
  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(nameRegExp, "The name must contain only characters")
      .required("Required field"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required field"),
  });

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  // const contacts = useSelector(contactsSelector);
  // const dispatch = useDispatch();
  const handleSubmit = async ({ name, phone }, { resetForm }) => {
    const contactsAll = { name, phone };
    const hasNameInContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    // dispatch(addContact({ name, number, id: nanoid(4) }));
    await addContact(contactsAll);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContact>
        <Label htmlFor="name">Name</Label>
        <div>
          <Input type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <Label htmlFor="number">Number</Label>
        <div>
          <Input type="tel" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormContact>
    </Formik>
  );
};
