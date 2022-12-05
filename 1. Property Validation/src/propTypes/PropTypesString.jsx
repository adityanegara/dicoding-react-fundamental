import PropTypes from "prop-types";

const PropTypesString = ({name}) => {
    return(<p>Hello my name is, {name}</p>)
};

PropTypesString.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PropTypesString;