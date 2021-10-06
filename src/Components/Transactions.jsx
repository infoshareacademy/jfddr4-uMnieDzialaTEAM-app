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
// import TableBody from "@mui/material/TableBody";
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

const StyledTableCell = styled(TableCell)({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "rgba(255, 255, 255, 0.06)",
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

const CustomizedTableCellAmount = styled(TableCell)({
	[`&.${tableCellClasses.body}`]: {
		color: "rgba(248, 58, 161, 1)",
		fontSize: 16,
		fontWeight:700
	},
});

const CustomizedTableBody = styled(TableBody)({
	[`&.${tableBodyClasses.root}`]: {
		overflow: "scroll",
	},
});

export function TransactionsView() {
	const [usersData, setUsersData] = useState([]);
	const [transactions, setTransactions] = useState([]);
	const q = query(collection(db, "cities"));
	const fetchDb = async () => {
		const usersData = await getDocs(collection(db, "cities"));
		const transactions = await getDocs(collectionGroup(db, "transactions"));
		const usersState = [];
		const transactionsState = [];
		usersData.forEach((doc) => {
			console.log(`${doc.id}`, doc.data());
			usersState.push({ ...doc.data(), id: doc.id });
		});
		setUsersData(usersState);
		transactions.forEach((doc) => {
			console.log(`${doc.id}`, doc.data());
			transactionsState.push({ ...doc.data(), id: doc.id });
		});
		setTransactions(transactionsState);
	};
	useEffect(() => {
		fetchDb();
	}, []);
	const handleDelete = (id) => {
		console.log(id);
	};
	const handleEdit = (id) => {
		console.log(id);
	};
	return (
		<CustomizedContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">Transactions</StyledTableCell>
						<StyledTableCell align="left">Date</StyledTableCell>
						<StyledTableCell align="left">Category</StyledTableCell>
						<StyledTableCell align="left">Amount[PLN]</StyledTableCell>
						<StyledTableCell align="left"></StyledTableCell>
					</TableRow>
				</TableHead>
				<CustomizedTableBody>
					{transactions.map((row) => (
						<TableRow
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<CustomizedTableCell component="th" scope="row">
								{row.name}
							</CustomizedTableCell>
							<CustomizedTableCell>{row.category}</CustomizedTableCell>
							<CustomizedTableCell align="left">
								{row.category}
							</CustomizedTableCell>
							<CustomizedTableCellAmount align="left">
								{row.value}
							</CustomizedTableCellAmount>
							<CustomizedTableCell align="left">
								<Button
									size="medium"
									color="inherit"
									startIcon={<EditOutlinedIcon />}
									onClick={() => handleEdit(row.id)}
								></Button>
								<Button
									size="medium"
									color="inherit"
									startIcon={<BackspaceIcon />}
									onClick={() => handleDelete(row.id)}
								></Button>
							</CustomizedTableCell>
						</TableRow>
					))}
				</CustomizedTableBody>
			</Table>
		</CustomizedContainer>
	);
}

// import { db } from "../firebaseConfig";
// import {
// 	collection,
// 	query,
// 	onSnapshot,
// 	getDocs,
// 	collectionGroup,
// } from "firebase/firestore/lite";
// import { useEffect, useState } from "react";

// export function TransactionsView() {
// 	const [usersData, setUsersData] = useState([]);
// 	const [transactions, setTransactions] = useState([]);
// 	const q = query(collection(db, "users"));
// 	const fetchDb = async () => {
// 		const usersData = await getDocs(collection(db, "users"));
// 		const transactions = await getDocs(collectionGroup(db, "transactions2"));

// 		const usersState = [];
// 		const transactionsState = [];
// 		usersData.forEach((doc) => {
// 			console.log(`${doc.id}`, doc.data());
// 			usersState.push({ ...doc.data(), id: doc.id });
// 		});

// 		setUsersData(usersState);

// 		transactions.forEach((doc) => {
// 			console.log(`${doc.id}`, doc.data());
// 			transactionsState.push(doc.data());
// 		});

// 		setTransactions(transactionsState);
// 	};

// 	useEffect(() => {
// 		fetchDb();
// 	}, []);

// 	return (
// 		<div>
// 			{usersData.map((data) => {
// 				return (
// 					<div key={data.id}>
// 						<p>{data.id}</p>
// 					</div>
// 				);
// 			})}
// 			<ul>
// 				{transactions.map((data, i) => {
// 					return (
// 						<li key={i}>
// 							<p>{data.currency}</p>
// 							<p>{data.value}</p>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }
