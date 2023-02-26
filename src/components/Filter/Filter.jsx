import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  const handleClear = e => {
    e.target.value = '';
    dispatch(setFilter(''));
  };

  return (
    <Box
      component="form"
      onChange={handleChange}
      sx={{
        mt: 0,
        marginTop: 0,
      }}
    >
      <Grid item xs={2}>
        <TextField
          fullWidth
          inputMode="search"
          id="filter"
          name="filter"
          placeholder="Find contacts by name or number "
          title="John Doe or 123-456-654"
          onBlur={handleClear}
        />
      </Grid>
    </Box>
  );
};
