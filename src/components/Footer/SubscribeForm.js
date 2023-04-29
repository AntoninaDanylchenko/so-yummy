import {
  FooterSubscribeWrapper,
  FooterSubscribeTextWrap,
  FooterSubscribeTitle,
  FooterSubscribetext,
  FooterSubscribeLabel,
  FooterSubscribeInput,
  FooterSubscribeInputIcon,
  FooterSubscribeButton,
} from './Footer.styled';

const SubscribeForm = () => {
  return (
    <FooterSubscribeWrapper>
      <FooterSubscribeTextWrap>
        <FooterSubscribeTitle>Subscribe to our Newsletter</FooterSubscribeTitle>
        <FooterSubscribetext>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </FooterSubscribetext>
      </FooterSubscribeTextWrap>
      <FooterSubscribeLabel>
        <FooterSubscribeInput placeholder="Enter your email address" />
        <FooterSubscribeInputIcon />
      </FooterSubscribeLabel>

      <FooterSubscribeButton>Subcribe</FooterSubscribeButton>
    </FooterSubscribeWrapper>
  );
};

export { SubscribeForm };
