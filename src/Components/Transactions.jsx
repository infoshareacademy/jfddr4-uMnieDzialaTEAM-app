import { db } from "../firebaseConfig";
import {
  collection,
  query,
  onSnapshot,
  getDocs,
  collectionGroup,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer, {
  tableContainerClasses,
} from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Dialog } from "@mui/material";

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    color: "red",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
});

const CustomizedContainer = styled(TableContainer)({
	[`&.${tableContainerClasses.root}`]: {
    backgroundColor: "blue",
  },
})

export function TransactionsView() {
  const [usersData, setUsersData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const q = query(collection(db, "users"));
  const fetchDb = async () => {
    const usersData = await getDocs(collection(db, "users"));
    const transactions = await getDocs(collectionGroup(db, "transactions2"));

    const usersState = [];
    const transactionsState = [];
    usersData.forEach((doc) => {
      console.log(`${doc.id}`, doc.data());
      usersState.push({ ...doc.data(), id: doc.id });
    });

    setUsersData(usersState);

    transactions.forEach((doc) => {
      console.log(`${doc.id}`, doc.data());
      transactionsState.push({ ...doc.data(), name: doc.id, id: doc.id });
    });

    setTransactions(transactionsState);
  };

  useEffect(() => {
    fetchDb();
  }, []);

	const handleDelete = (id) => {
		console.log(id)

	}
	const handleEdit = (id) => {
		console.log(id)
		handleDialogOpen()
		setEditFormId(id)
	}
const [dialogOpen, setDialogOpen] = useState(false)
const [editFormId, setEditFormId] = useState("")
const handleDialogOpen = () => {
	setDialogOpen(true)
}
const handleDialogClose = () => {
	setDialogOpen(false)
	setEditFormId("")
}
  return (
		<>
    <CustomizedContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell
            // style={{
            // 	color: "rgba(255, 255, 255, 0.6)",
            // 	borderBottom: "none",
            // }}
            >
              Transactions
            </StyledTableCell>
            <StyledTableCell
            // align="right"
            // style={{
            // 	color: "rgba(255, 255, 255, 0.6)",
            // 	borderBottom: "none",
            // }}
            >
              Category
            </StyledTableCell>
            <StyledTableCell
            // align="right"
            // style={{
            // 	color: "rgba(255, 255, 255, 0.6)",
            // 	borderBottom: "none",
            // }}
            >
              Amount
            </StyledTableCell>
            <StyledTableCell
            // align="right"
            // style={{
            // 	color: "rgba(255, 255, 255, 0.6)",
            // 	borderBottom: "none",
            // }}
            >
              actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell align="left">{row.currency}</TableCell>
              <TableCell align="right">
								<button onClick={() => handleEdit(row.id)}>
									E
								</button>
								<button onClick={() => handleDelete(row.id)}>
									D
								</button>
							</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomizedContainer>
		{/* {editFormId &&  <Dialog open={false}	>
			<KomponentDoEdycji idDokumentu={editFormId} onClose={handleDialogClose}></KomponentDoEdycji>
		</Dialog>} */}
		</>
  );
}
