import PropTypes from "prop-types";

const PropTypesObject = ({ employee }) => {
  return (
    <>
      <p>Name : , {employee.name}</p>
      <p>Address, {employee.address}</p>
      <p>Phone Number, {employee.phoneNumber}</p>
    </>
  );
};

PropTypesObject.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default PropTypesObject;
