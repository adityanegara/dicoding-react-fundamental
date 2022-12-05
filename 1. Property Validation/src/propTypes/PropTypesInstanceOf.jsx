import PropTypes from "prop-types";
import User from "./User";

const PropTypesInstanceOf = ({ user }) => {
  return (<div>
    <p>id: {user.id}</p>
    <p>name: {user.getName()}</p>
    <p>address: {user.getAddress()}</p>
    <p>phone number: {user.getPhoneNumber()}</p>
  </div>);
};

PropTypesInstanceOf.propTypes = {
  onClick: PropTypes.instanceOf(User),
};

export default PropTypesInstanceOf;
