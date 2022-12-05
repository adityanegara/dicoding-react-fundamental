import PropTypes from "prop-types";

const PropTypesBoolean = ({ isDark }) => {
  const renderDay = (isDark) => {
    return isDark ? "night" : "morning";
  };
  return <p>Its already, {renderDay(isDark)}</p>;
};

PropTypesBoolean.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default PropTypesBoolean;
