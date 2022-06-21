import './BreadcrumbsBackground.scss';

import CrumbImage from './breadcrumbs-background.jpeg';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { useNavigate, useLocation } from 'react-router-dom';

const BreadcrumbsBackground = () => {


const navigate = useNavigate();
const { pathname } = useLocation();

const pathnames = pathname.split("/").filter(Boolean);

  return (
    <div className='bread-crumbs-background'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link onClick={() => navigate("/")}>Strona główna</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length -1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (<Link key={name} onClick={() => navigate(routeTo)}>{name}</Link>
          );
        })}
      </Breadcrumbs>
    </div>
  )
};


export default BreadcrumbsBackground;