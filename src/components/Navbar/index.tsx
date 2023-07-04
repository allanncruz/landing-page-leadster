import Container from '@/styles/Layout'
import {
  NavBar,
  NavbarBrand
} from './style';


const MainNavBar = () => {


  return (
    <NavBar>
      <Container>
        <NavbarBrand>
          <a href="/">
            logo s
          </a>
        </NavbarBrand>
      </Container>
    </NavBar>
  );
};

export default MainNavBar;
