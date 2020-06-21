import styled from 'styled-components';

import Wrapper from '../Layout/Wrapper';

const Container = styled.div`
  background-color: #f7f8fe;
  text-align: center;
  padding: 40px 0;
  h2 {
    margin: 0;
    font-size: 50px;
  }
  p {
    font-size: 22px;
  }
`;

const IntroWrapper = styled(Wrapper)`
  max-width: 800px;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Intro = () => {
  return (
    <Container>
      <IntroWrapper>
        <h2>
          Hello
          <br />
          I’m Leyser Sandoval
        </h2>
        <p>I'm a front-end developer</p>
      </IntroWrapper>
    </Container>
  );
};

export default Intro;
