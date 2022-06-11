import logo from '../../../../public/logo.svg';

console.log(logo); 

function Header() {
  
  return <img src={logo} alt="Logo" />;
}

export default Header;