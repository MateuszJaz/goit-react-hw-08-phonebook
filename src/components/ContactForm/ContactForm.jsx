import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    let nameOntheList = false;
    const form = e.target;
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const number = data.get('number');
    const toLowerCase = name.toLowerCase();

    const newContact = {
      name,
      number,
    };

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === toLowerCase) {
        alert(`${name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <Container
      component="form"
      onSubmit={handleAddContact}
      sx={{
        mt: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            id="name"
            label="Name"
            name="name"
            placeholder="e.g. John Doe"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="tel"
            id="number"
            label="Phone number"
            name="number"
            placeholder="e.g. 123-456-789"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            inputProps={{
              inputMode: 'numeric',
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          background:
            'linear-gradient(-90deg, rgba(51,44,148,1) 0%, rgba(157,153,251,1) 100%)',
        }}
      >
        Add
      </Button>
    </Container>
  );
};
export default ContactForm;
