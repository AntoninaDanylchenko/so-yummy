import { PropTypes } from 'prop-types';
import { TitleStyle } from './Title.styled';
const Title = ({ title }) => {
  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
