import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        position: 'absolute',
      }}
    >
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Container
        maxWidth="xs"
        sx={{
          margin: '40px 0',
          color: '#20186e',
          backgroundColor: '#ffffffba',
          borderRadius: 4,
        }}
      >
        <Typography variant="h2" component="h1" align="left">
          <strong>Phonebook Contacts App</strong>
        </Typography>
        <Typography
          align="justify"
          sx={{
            marginTop: '20px',
            color: '#8e929e',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: 4,
          }}
        >
          Easily organize and keep track of all your important contacts in one
          place. Say goodbye to scattered information and hello to streamlined
          networking. Join us and take your connections to the next level!
        </Typography>

        <Link to="register">
          <Button
            variant="contained"
            sx={{
              margin: '1em 8em',
              background:
                'linear-gradient(-90deg, rgba(51,44,148,1) 0%, rgba(157,153,251,1) 100%)',
            }}
          >
            Get Started!
          </Button>
        </Link>
      </Container>
      <Box
        sx={{
          backgroundImage:
            'url("https://i.postimg.cc/B6GsG6hC/contacts-App-BG.png")',
          height: 800,
          width: 1080,
          zoom: 0.7,
          zIndex: -800,
          position: 'absolute',
          right: 0,
        }}
      />
    </Container>
  );
};

export default Home;
