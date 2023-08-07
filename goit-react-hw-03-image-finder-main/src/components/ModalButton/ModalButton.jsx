import PropTypes from 'prop-types';


export const ModalButton = ({ onOpen }) => {
  return (
    <button type="button" onClick={onOpen}>
      Open modal
    </button>
  );
};

ModalButton.propTypes = {
  children: PropTypes.node,
};

