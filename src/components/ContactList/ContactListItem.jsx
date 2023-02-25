import {
  selectFilterValue,
  selectContacts,
  selectErrorStatus,
} from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const error = useSelector(selectErrorStatus);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 36,
        height: 36,
      },
      children: `${name.split(' ')[0][0].toUpperCase()}`,
    };
  }
  return filteredContacts.length > 0 ? (
    <Stack spacing={1}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item
            key={id}
            sx={{
              mt: 1,
              mb: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              padding: '15px 5px 15px 15px',
            }}
          >
            <Avatar {...stringAvatar(name)} />
            {name}: {number}
            <IconButton
              aria-label="delete"
              size="small"
              type="submit"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </IconButton>
          </Item>
        );
      })}
    </Stack>
  ) : (
    (error && (
      <Typography variant="overline" display="block" gutterBottom>
        Error: {error}
      </Typography>
    )) || (
      <Typography variant="overline" display="block" gutterBottom>
        No contacts.
      </Typography>
    )
  );
};
export default ContactListItem;
