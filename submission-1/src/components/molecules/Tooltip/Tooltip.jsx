import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Button from "../../atoms/Button/Button";

const Tooltip = styled(motion.ul)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "15px",
  listStyleType: "none",
  marginTop: "0px",
  backgroundColor: theme.colors.neutral.gray,
  padding: "25px",
  top: "73px",
  left: "-30px",
  borderRadius: "10px",
  transform: "translate(-50%, 0)",
  position: "absolute",
  zIndex: "99999999",
}));

const TooltipParagraph = styled.p({
  fontWeight: "bold",
  fontSize: "1.2em",
});

const toolTipItemVariant = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
  exit: { opacity: 0 },
};

const tooltipVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
};

const TooltipContent = () => {
  const theme = useTheme();
  return (
    <Tooltip
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={tooltipVariant}
    >
      <motion.li variants={toolTipItemVariant}>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.neutral.gray}
          buttonHoverColor={theme.colors.neutral.darkGray}
          role="search-button"
        >
          <TooltipParagraph>All</TooltipParagraph>
        </Button>
      </motion.li>
      <motion.li variants={toolTipItemVariant}>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.neutral.gray}
          buttonHoverColor={theme.colors.neutral.darkGray}
          role="search-button"
        >
          <TooltipParagraph>Archived</TooltipParagraph>
        </Button>
      </motion.li>
    </Tooltip>
  );
};

export default TooltipContent;
