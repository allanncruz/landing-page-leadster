import Container from '@/styles/layout'
import Link from 'next/link';
import {
  NavBar,
  NavbarBrand
} from './style';


const AppBar = () => {


  return (
    <NavBar>
      <Container>
        <NavbarBrand href="/">
          <img 
            src="/logo.png" 
            alt="Leadster - Ferramenta de Geração de Leads" />
        </NavbarBrand>
      </Container>
    </NavBar>
  );
};

export default AppBar;
