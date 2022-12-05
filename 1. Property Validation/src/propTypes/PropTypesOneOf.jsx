import PropTypes from "prop-types";

const PropTypesOneOf = ({ mode }) => {
  return (
    <div>
      <p>mode: {mode}</p>
    </div>
  );
};

PropTypesOneOf.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
};

export default PropTypesOneOf;
