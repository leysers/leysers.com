import styled from 'styled-components';

import Wrapper from './Wrapper';
import Navigation from '../Navigation';
import { Button } from '../common';

const Container = styled.header`
  background-color: #f7f8fe;
  padding: 40px 0;
`;

const NavigationWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #4f78e0;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Container>
      <NavigationWrapper>
        <Logo>Leyser.</Logo>
      </NavigationWrapper>
    </Container>
  );
};

export default Header;
