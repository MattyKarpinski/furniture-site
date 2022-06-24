import './BreadcrumbsBackground.scss';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const BreadcrumbsBackground = () => {

const navigate = useNavigate();
const { pathname } = useLocation();
const pathnames = pathname.split("/").filter(Boolean);



const theme = createTheme({
  palette: {
    primary: {
      main: '#333646'
    },
    text: {
      primary: '#C4C4C4',
      secondary: '#DDC79F'
    }
  }
});


  return (
    <div className='bread-crumbs-background'>
      <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb" separator="|" style = {{fontFamily:'Montserrat', color:'#333646', fontSize: "24px"}}>
        <Link onClick={() => navigate("/")} style = {{fontFamily:'Montserrat', color:'#333646', fontSize: "24px"}}>Strona główna</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length -1;
          return isLast ? (
            <Typography key={name} style = {{fontFamily:'Montserrat', color:'#DDC79F', fontSize: "24px", fontWeight: 100}}>{name}</Typography>
          ) : (<Link key={name} onClick={() => navigate(routeTo)} style = {{fontFamily:'Montserrat', color:'#333646', fontSize: "24px"}}>{name}</Link>
          );
        })}
      </Breadcrumbs>
      </ThemeProvider>
    </div>
  )
};

export default BreadcrumbsBackground;