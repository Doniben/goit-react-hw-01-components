import PropTypes from 'prop-types';

export function Wrapper({ children }) {
  return <div>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
