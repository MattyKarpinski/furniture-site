import './App.scss';
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from './components/pages/landing-page/LandingPage';
import AboutUsPage from './components/pages/about-us-page/AboutUsPage';
import ServicesPage from './components/pages/services-page/ServicesPage';
import WorkPage from './components/pages/work-page/WorkPage';
import BlogPage from './components/pages/blog-page/BlogPage';
import ContactPage from './components/pages/contact-page/ContactPage';

import TopContactBar from './components/features/top-contac-bar/TopContactBar';
import NavBar from './components/features/nav-bar/NavBar';
import Footer from './components/features/footer/Footer';
import OfficesPage from './components/pages-services/offices-page/OfficesPage';
import BedroomPage from './components/pages-services/bedroom-page/BedroomPage';
import KitchensPage from './components/pages-services/kitchens-page/KitchensPage';
import DresserPage from './components/pages-services/dresser-page/DresserPage';
import ConsolePage from './components/pages-services/console-page/ConsolePage';
import TvCabinetsPage from './components/pages-services/tv-cabinets-page/TvCabinetsPage';
import ExhibitionsPage from './components/pages-services/exhibitions-page/ExhibitionsPage';
import CabinetsPage from './components/pages-services/cabinets-page/CabinetsPage';
import BreadcrumbsBackground from './components/assets/breadcrumbs-background/BreadcrumbsBackground';



const App = () => {
  return <div>
    
    
    <TopContactBar></TopContactBar>
    <NavBar></NavBar>
    <BreadcrumbsBackground></BreadcrumbsBackground>
    
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/o-nas" element={<AboutUsPage />} />
      <Route path="/uslugi" element={<ServicesPage />} />
      <Route path="/praca" element={<WorkPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/kontakt" element={<ContactPage />} />

      <Route path="/uslugi/biura" element={<OfficesPage />} />
      <Route path="/uslugi/sypialnie" element={<BedroomPage />} />
      <Route path="/uslugi/kuchnie" element={<KitchensPage />} />
      <Route path="/uslugi/komody" element={<DresserPage />} />
      <Route path="/uslugi/konsole" element={<ConsolePage />} />
      <Route path="/uslugi/szafki-rtv" element={<TvCabinetsPage />} />
      <Route path="/uslugi/wystawy" element={<ExhibitionsPage />} />
      <Route path="/uslugi/gabinety" element={<CabinetsPage />} />
    </Routes>

    <Footer></Footer>
    
  </div>;
}

export default App;


