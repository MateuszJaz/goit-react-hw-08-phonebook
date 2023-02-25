import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import {
  selectIsLoadingStatus,
  selectErrorStatus,
} from 'redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import css from '../pages/Home.module.css';

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className={css.contactform}>
        <ContactForm />
      </div>
      <div className={css.filter}>
        <Filter />
        {isLoading && !error ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default Phonebook;
