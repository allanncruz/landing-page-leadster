import styled from 'styled-components'


export const StyledButtonSolid = styled.button<{
  colorbackground?: string;
  onClick?: () => void;
  colorfont: string;
}>`
  padding: 0.7rem 1.75rem;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${(p) => (p.colorbackground)} !important;
  color: ${(p) => (p.colorfont)};
  border: none;
  transition: .3s;

  &:hover{
    filter: grayscale(.2);
  }

  :disabled{
    opacity: .7;
  }
`;
  

export const StyledButtonOutline = styled.button<{
  border?: string;
  colorbackground?: string;
  onClick?: () => void;
  colorfont: string;
}>`
  padding: 0.7rem 1.75rem;
  cursor: pointer;
  border-radius: 20px;
  background-color: transparent ;
  color: ${(p) => (p.colorfont)};
  border: ${(p) => (p.border)};
  transition: .3s;

  &:hover{
    background-color: ${(p) => (p.colorbackground)} !important;
    color: #fff;
  }

  :disabled{
    opacity: .7;
  }
`;
