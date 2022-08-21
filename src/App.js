// import { GlobalStyle } from "./common/GlobalStyle";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import { Container } from "./components/Container/Container.styled";
import { Toaster } from "react-hot-toast";
export const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
      <Toaster />
    </>
  );
};

export default App;
