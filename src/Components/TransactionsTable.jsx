import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { borderBottom } from "@mui/system";

function createData(transactions, category, amount) {
	return { transactions, category, amount };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CustomizedContainer = styled(TableContainer)`
	background: rgba(255, 255, 255, 0.06);
`;

export default function BasicTable() {
	return (
		<CustomizedContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell
							style={{
								color: "rgba(255, 255, 255, 0.6)",
								borderBottom: "none",
							}}
						>
							Transactions
						</TableCell>
						<TableCell
							// align="right"
							style={{
								color: "rgba(255, 255, 255, 0.6)",
								borderBottom: "none",
							}}
						>
							Category
						</TableCell>
						<TableCell
							// align="right"
							style={{
								color: "rgba(255, 255, 255, 0.6)",
								borderBottom: "none",
							}}
						>
							Amount
						</TableCell>
						<TableCell
							// align="right"
							style={{
								color: "rgba(255, 255, 255, 0.6)",
								borderBottom: "none",
							}}
						></TableCell>
						<TableCell
							// align="right"
							style={{
								color: "rgba(255, 255, 255, 0.6)",
								borderBottom: "none",
							}}
						></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.transactions}
							</TableCell>
							<TableCell >{row.category}</TableCell>
							<TableCell align="left">{row.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</CustomizedContainer>
	);
}
