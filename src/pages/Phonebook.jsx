import ContactForm from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import style from "../pages/Home.module.css"

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoadingStatus);
  const error = useSelector(selectErrorStatus);

  return (
<div className={style.container}>
  <h1>Phonebook</h1>
  <ContactForm />
  <h2>Contacts</h2>
  <Filter />
  {isLoading && !error ? <p>Loading...</p> : <ContactList />}
</div>
  );
}

export default Phonebook;