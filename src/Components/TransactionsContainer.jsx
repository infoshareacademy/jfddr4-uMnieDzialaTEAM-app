import styled from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IconContext } from "react-icons";
import BasicTable from "./TransactionsTable";
import TableEx from "./TableEx";

const TransactionWrapper = styled.div`
	width: 900px;
	height: 416px;
	left: 399px;
	top: 658px;
	background: rgba(255, 255, 255, 0.06);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const MonthBar = styled.div`
	width: 900px;
	height: 64px;
	background: rgba(255, 255, 255, 0.22);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const ArrowLeft = styled.button`
	height: 15px;
	width: 20px;
	background: transparent;
	border: transparent;
	cursor: pointer;
	margin-right: 10px;
	display: flex;
	align-items: center;
`;

const ArrowRight = styled.button`
	height: 15px;
	width: 20px;
	background: transparent;
	border: transparent;
	cursor: pointer;
	margin-left: 10px;
	display: flex;
	align-items: center;
`;

const MonthText = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 24px;
	color: rgba(255, 255, 255, 1);
`;

const TransactionsDiv = styled.div`
	display: flex;
`;

export function TransactionsContainer() {
	return (
		<TransactionWrapper>
			<MonthBar>
				<ArrowLeft>
					<IconContext.Provider
						value={{
							color: "white",
							className: "global-class-name",
							size: "20px",
						}}
					>
						<BiLeftArrow />
					</IconContext.Provider>
				</ArrowLeft>
				<MonthText>September</MonthText>
				<ArrowRight>
					<IconContext.Provider
						value={{
							color: "white",
							className: "global-class-name",
							size: "20px",
						}}
					>
						<BiRightArrow />
					</IconContext.Provider>
				</ArrowRight>
			</MonthBar>
			<TransactionsDiv>
				<BasicTable></BasicTable>
			</TransactionsDiv>
		</TransactionWrapper>
	);
}
