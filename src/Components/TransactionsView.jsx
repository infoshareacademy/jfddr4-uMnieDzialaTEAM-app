import { db } from "../firebaseConfig";
import { doc } from "firebase/firestore";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer, {
  tableContainerClasses,
} from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody, { tableBodyClasses } from "@mui/material/TableBody";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RemoveExpense from "./RemoveExpense";
import EditExpense from "./EditExpense";
import { useCurrentUser } from "../helpers/hooks";

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    color: "rgba(255, 255, 255, 0.6)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
});
const CustomizedContainer = styled(TableContainer)({
  [`&.${tableContainerClasses.root}`]: {
    background: "rgba(255, 255, 255, 0.06)",
  },
});

const CustomizedTableCell = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
  },
});

const CustomizedTableBody = styled(TableBody)({
  [`&.${tableBodyClasses.root}`]: {
    overflow: "scroll",
  },
});

export function TransactionsView(props) {
  const transactions = props.transactions;
  const [dialogOpen, setDialogOpen] = useState("");
  const [clickedTransaction, setClickedTransaction] = useState("");
  const currentUser = useCurrentUser();

  const handleDelete = (id) => {
    setClickedTransaction(id);
    setDialogOpen("delete");
  };
  const handleEdit = (id) => {
    setClickedTransaction(id);
    setDialogOpen("edit");
  };
  const generateDialogContent = () => {
    if (dialogOpen === "delete") {
      const documentReference = doc(
        db,
        "users",
        currentUser.uid,
        "transactions",
        clickedTransaction
      );
      return (
        <RemoveExpense
          expenseDocumentReference={documentReference}
          afterAction={closeDialog}
        />
      );
    }
    if (dialogOpen === "edit") {
      const documentReference = doc(
        db,
        "users",
        currentUser.uid,
        "transactions",
        clickedTransaction
      );
      return (
        <EditExpense
          expenseDocumentReference={documentReference}
          afterAction={closeDialog}
        />
      );
    }
    return null;

    // Wykonywane po zakończeniu akcji w kazdym Dialog-u
  };
  const closeDialog = () => setDialogOpen("");
  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <CustomizedContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Transactions</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="center">Amount [PLN]</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <CustomizedTableBody>
          {transactions.map((row) => (
            <TableRow
              key={row.key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <CustomizedTableCell component="th" scope="row">
                {row.name}
              </CustomizedTableCell>
              <CustomizedTableCell>
                {row.date.toDate().toDateString()}
              </CustomizedTableCell>
              <CustomizedTableCell align="left">
                {row.category}
              </CustomizedTableCell>
              <CustomizedTableCell
                align="center"
                style={{
                  color:
                    row.type === "expense"
                      ? "rgba(248, 58, 161, 1)"
                      : "rgba(46, 225, 237, 1)",
                }}
              >
                {row.value}
              </CustomizedTableCell>
              <CustomizedTableCell align="right">
                <Button
                  size="medium"
                  color="inherit"
                  startIcon={<EditOutlinedIcon />}
                  onClick={() => handleEdit(row.key)}
                ></Button>
                <Button
                  size="medium"
                  color="inherit"
                  startIcon={<BackspaceIcon />}
                  onClick={() => handleDelete(row.key)}
                ></Button>
              </CustomizedTableCell>
            </TableRow>
          ))}
        </CustomizedTableBody>
      </Table>
      <Modal
        open={dialogOpen !== ""}
        onClose={closeDialog}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>{generateDialogContent()}</Box>
      </Modal>
    </CustomizedContainer>
  );
}
