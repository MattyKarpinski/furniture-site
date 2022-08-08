import './BreadcrumbsBackground.scss';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, ThemeProvider } from '@mui/material';
import { createTheme, experimental_sx as sx  } from '@mui/material';
import {  HiHome } from "react-icons/hi";
import { useMediaQuery } from '@mui/material';

const BreadcrumbsBackground = () => {

const navigate = useNavigate();
const { pathname } = useLocation();
const pathnames = pathname.split("/").filter(Boolean);

const theme = createTheme({
  palette: {
    primary: {
      main: '#DDC79F'
    },
    text: {
      primary: '#DDC79F',
      secondary: '#DDC79F'
    }
  },
});

const responsiveTypography = {
    fontFamily:'Montserrat',
    color: "#CECECE",
    fontSize: { xs: 12, md: 24, lg: 24, xl: 24 },
    fontWeight: 100,
    textTransform:'capitalize',
};

const responsiveBreadcrumbs = {
    fontFamily:'Montserrat',
    color:'#DDC79F',
    fontSize: { xs: 12, md: 24, lg: 24, xl: 24 },
};

const responsiveLink = {
    fontFamily:'Montserrat',
    color:'#DDC79F',
    textTransform:'capitalize',
    fontSize: { xs: 12, md: 24, lg: 24, xl: 24 },
};

const matches = useMediaQuery('(max-width:390px)');

  return (
    <div className='bread-crumbs'>
      <i><HiHome></HiHome></i>
      <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb" separator="|" sx = {responsiveBreadcrumbs}>
      
        <Link onClick={() => navigate("/")} sx = {responsiveLink}>Strona główna</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length -1;
          return isLast ? (
            <Typography key={name} sx = {responsiveTypography}>{name}</Typography>
          ) : (<Link key={name} onClick={() => navigate(routeTo)} sx = {responsiveLink}>{name}</Link>
          );
        })}
      </Breadcrumbs>
      </ThemeProvider>
    </div>
  )
};

export default BreadcrumbsBackground;