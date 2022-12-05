import PropTypes from "prop-types";
import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

DeleteButton.defaultProps = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
