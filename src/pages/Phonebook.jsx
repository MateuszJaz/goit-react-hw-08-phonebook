import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

import {
	selectIsLoadingStatus,
	selectErrorStatus,
} from "redux/contacts/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import css from "../pages/Home.module.css";

const Phonebook = () => {
	const isLoading = useSelector(selectIsLoadingStatus);
	const error = useSelector(selectErrorStatus);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={css.container}>
			<h1>Contacts</h1>
			<div className={css.contactform}>
				<ContactForm />
			</div>
			<div className={css.filter}>
				<Filter />
				{isLoading && !error ? <p>Loading...</p> : <ContactList />}
			</div>
		</div>
	);
};

export default Phonebook;
