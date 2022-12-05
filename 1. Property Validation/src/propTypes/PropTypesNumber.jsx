import PropTypes from "prop-types";

const PropTypesNumber = ({queueNumber}) => {
    return(<p>Antrian ke, {queueNumber}</p>)
};

PropTypesNumber.propTypes = {
    queueNumber: PropTypes.number.isRequired,
}

export default PropTypesNumber;