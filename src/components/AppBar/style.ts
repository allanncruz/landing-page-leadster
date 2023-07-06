import Link from 'next/link'
import styled from 'styled-components'

export const NavBar = styled.div`
  position: sticky;
  top: 0;
  padding: 27px 0;
  background: #fff;
`;


export const NavbarBrand = styled(Link)`
  width: 194px;
  margin-right: 42px;
  z-index: 99;
  position: relative;
  margin: 0 auto;
  display: block;
`;
