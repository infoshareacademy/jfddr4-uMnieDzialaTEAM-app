import { deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Paragraph = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: 800;
	font-size: 16px;
	line-height: 24px;
	color: rgb(85, 85, 85);
	text-align: center;
`;

const RemoveExpense = function ({ expenseDocumentReference, afterAction }) {
	// Usunięcie wydatku z bazy danych
	const RemoveData = async (e) => {
		e.preventDefault();
		try {
			await deleteDoc(expenseDocumentReference);
			afterAction();
		} catch (err) {}
	};

	return (
		<div>
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
					padding: "50px",

					width: "410px",
					height: "150px",
					background: "#FFFFFF",
					borderRadius: "10px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
				}}
				noValidate
				autoComplete="off"
			>
				<Paragraph>
					Are you sure?
					<br />
					Deleting this transaction will erase it permamently.
				</Paragraph>

				<button
					style={{
						width: "400px",
						height: "48px",
						background: "linear-gradient(180deg, #7AECF4 0%, #44DFE9 100%)",
						boxShadow:
							"inset 2px 0px 2px rgba(255, 255, 255, 0.1), inset 0px 6px 10px rgba(255, 255, 255, 0.25)",
						borderRadius: "8px",
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "bold",
						fontSize: "16px",
						lineHeight: "24px",
						cursor: "pointer",
					}}
					onClick={RemoveData}
				>
					REMOVE
				</button>
			</Box>
		</div>
	);
};

export default RemoveExpense;
