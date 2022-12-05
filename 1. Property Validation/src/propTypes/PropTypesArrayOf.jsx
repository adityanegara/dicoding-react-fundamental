import PropTypes from "prop-types";

const PropTypesArrayOf = ({ fruits }) => {
  const renderFruits = (fruits) => {
    return fruits.map((fruit, i) => {
      return <li key={i}>{fruit}</li>;
    });
  };

  return <ul>{renderFruits(fruits)}</ul>;
};

PropTypesArrayOf.propTypes = {
  fruits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropTypesArrayOf;
