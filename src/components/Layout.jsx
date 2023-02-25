import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Container sx={{ margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Box
        sx={{
          backgroundImage: 'url("https://i.postimg.cc/gcRvNVX2/BL.png")',
          height: 184,
          width: 1040,
          zoom: 0.9,
          zIndex: -800,
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}
      />
      <Box
        sx={{
          backgroundImage: 'url("https://i.postimg.cc/RFb4tJ9r/TR.png")',
          height: 70,
          width: 361,
          zoom: 0.9,
          zIndex: -800,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
    </Container>
  );
};
