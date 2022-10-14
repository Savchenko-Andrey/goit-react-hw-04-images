import PropTypes from 'prop-types';
import { BtnIcons, Icons, LoadBtn } from './Button.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      Load more
    </LoadBtn>
  );
};

export const SerchButton = () => {
  return (
    <BtnIcons type="submit">
      <Icons />
    </BtnIcons>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};