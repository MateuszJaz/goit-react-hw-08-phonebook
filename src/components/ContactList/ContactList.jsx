import ContactListItem from './ContactListItem';
import { Container } from '@mui/material';

const ContactList = () => {
  return (
    <Container
      sx={{
        height: 440,
        overflow: 'scroll',
        marginTop: '10px',
        textAlign: 'center',
      }}
    >
      <ContactListItem />
    </Container>
  );
};

export default ContactList;
