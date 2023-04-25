import {
  NotFoundSection,
  NotFoundSpan,
  NotFoundSpanBolt,
  NotFoundText,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundText>
        <NotFoundSpanBolt>We are sorry,</NotFoundSpanBolt>
        <NotFoundSpan>
          but the page you were looking for can’t be found..
        </NotFoundSpan>
      </NotFoundText>
    </NotFoundSection>
  );
};
export default NotFound;
