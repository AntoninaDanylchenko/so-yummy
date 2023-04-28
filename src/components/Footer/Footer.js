import {
  MainWrapper,
  Wrapper,
  BottomTextWrapper,
  BottomTextReserved,
  BottomTextService,
} from './Footer.styled';
import { FooterNav } from './Nav';

const Footer = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <FooterNav />
      </Wrapper>
      <BottomTextWrapper>
        <BottomTextReserved>© 2023 All Rights Reserved.</BottomTextReserved>
        <BottomTextService>Terms of Service</BottomTextService>
      </BottomTextWrapper>
    </MainWrapper>
  );
};

export { Footer };
