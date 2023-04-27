import {
  FooterSubscribeWrapper,
  FooterSubscribeLabel,
  FooterSubscribeInput,
  FooterSubscribeInputIcon,
  FooterSubscribeButton,
} from './Footer.styled';

const SubscribeForm = () => {
  return (
    <FooterSubscribeWrapper>
      <FooterSubscribeLabel>
        <FooterSubscribeInput placeholder="Enter your email address" />
        <FooterSubscribeInputIcon />
      </FooterSubscribeLabel>

      <FooterSubscribeButton>Subcribe</FooterSubscribeButton>
    </FooterSubscribeWrapper>
  );
};

export { SubscribeForm };
