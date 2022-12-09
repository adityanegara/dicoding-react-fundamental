import styled from "@emotion/styled";
import { motion } from "framer-motion";
import createIcon from "../../../assets/icons/plus.png"
import "./test.css";

const TooltipStyled = styled(motion.div)({
  display: "inline-block",
  position: "relative",
});

const Tooltip = () => {
  return (
    <div class="tooltip">
      bottom
      <div class="bottom">
        <img src={createIcon} />
        <h3>CSS Tooltip</h3>
        <p>
          The CSS tooltip appears when user moves the mouse over an element, or
          when user tap the element with a mobile device.
        </p>
        <i></i>
      </div>
    </div>
  );
};

export default Tooltip;
