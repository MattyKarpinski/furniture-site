import './BreadcrumbsBackground.scss';
import breadcrumbsbackground from './breadcrumbs-background.jpeg';


import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadcrumbsBackground = () => {



  return (
    <div>
      <img src={breadcrumbsbackground} alt="Breadcrumbs background" className='bread-crumbs-background'/>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit">MUI</Link>
        <Link underline="hover" color="inherit"> Core</Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  )
}


export default BreadcrumbsBackground;