import PropTypes from "prop-types";

const PropTypesFunc = ({ onClick }) => {
  return (<button onClick={onClick}>Alert</button>);
};

PropTypesFunc.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PropTypesFunc;
