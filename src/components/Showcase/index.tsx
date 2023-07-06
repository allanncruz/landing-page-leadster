import Container from '@/styles/layout'

import { 
  StyleShowcase, 
  Title, 
  SubTitle 
} from './style';
import Button from '../Button';

interface propShowcase {
  title: string,
  subtitle: string,
  buttonStyle: string,
  url: string
}

const Showcase = ({
  title,
  subtitle
}: propShowcase) => {


  return (
    <StyleShowcase>
      <Container>
        <Button 
          label="Webinars Exclusivos" 
          url='/'
          color='primary'
          variant='outline'
          />
        <Title children={title} />
        <SubTitle children={subtitle} />
      </Container>
    </StyleShowcase>
  );
};

export default Showcase;
