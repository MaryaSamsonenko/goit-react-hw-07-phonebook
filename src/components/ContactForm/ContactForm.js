import { Formik, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/contactsApi";
import { FormContact, Label, Input, ButtonSubmit } from "./ContactForm.styled";

import { validationSchema } from "../../helpers/validationSchema";

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async ({ name, phone }, { resetForm }) => {
    const contactsObject = { name, phone };
    const hasNameInContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasNameInContacts) {
      toast.error(`Name ${name} is already in contacts`);
      return;
    }
    await addContact(contactsObject);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
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
