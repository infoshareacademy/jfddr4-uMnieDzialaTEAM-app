import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import AddExpenseIncome from "./AddExpenseIncome";

const StyledButton = styled.button`
  height: 48px;
  padding: 0px 15px;
  background: linear-gradient(180deg, #7aecf4 0%, #44dfe9 100%);
  box-shadow: inset 2px 0px 2px rgba(255, 255, 255, 0.1),
    inset 0px 6px 10px rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  bottom: 40px;
  right: 50px;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>ADD TRANSACTION</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddExpenseIncome onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
