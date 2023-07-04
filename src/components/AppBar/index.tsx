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
        <NavbarBrand>
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </NavbarBrand>
      </Container>
    </NavBar>
  );
};

export default AppBar;
