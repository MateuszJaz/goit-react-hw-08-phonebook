import { useSelector } from "react-redux";
import { selectIsLoadingStatus, selectErrorStatus } from "redux/contacts/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import css from "../pages/Home.module.css";

const Phonebook = () => {
	const isLoading = useSelector(selectIsLoadingStatus);
	const error = useSelector(selectErrorStatus);

	return (
		<div className={css.container}>
			<div className={css.contactform}>
				<ContactForm />
			</div>
			<div className={css.filter}>
				<h2>Contacts</h2>
				<Filter />
				{isLoading && !error ? <p>Loading...</p> : <ContactList />}
				</div>
		</div>
	);
};

export default Phonebook;
