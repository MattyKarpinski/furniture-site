import './BreadcrumbsBackground.scss';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import {  HiHome } from "react-icons/hi";

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
  }
});

const responsiveFont = {
  maxWidth: "max-content",
  "& .MuiBadge-badge": {
    backgroundColor: "gray",
    fontSize: { xs: 12, sm: 12 },
  },
};

  return (
    <div className='bread-crumbs'>
      <i><HiHome></HiHome></i>
      <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb" separator="|" style = {{fontFamily:'Montserrat', color:'#DDC79F', fontSize: "24px"}}>
      
        <Link onClick={() => navigate("/")} style = {{fontFamily:'Montserrat', color:'#DDC79F', fontSize: "24px"}} sx={responsiveFont}>Strona główna</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length -1;
          return isLast ? (
            <Typography key={name} style = {{fontFamily:'Montserrat', color:'#CECECE', fontSize: "24px", fontWeight: 100, textTransform:'capitalize'}}>{name}</Typography>
          ) : (<Link key={name} onClick={() => navigate(routeTo)} style = {{fontFamily:'Montserrat', color:'#DDC79F', fontSize: "24px", textTransform:'capitalize'}}>{name}</Link>
          );
        })}
      </Breadcrumbs>
      </ThemeProvider>
    </div>
  )
};

export default BreadcrumbsBackground;