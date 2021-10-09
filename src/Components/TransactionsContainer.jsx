import styled from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IconContext } from "react-icons";
import { TransactionsView } from "./TransactionsView";

const TransactionWrapper = styled.div`
  left: 399px;
  top: 658px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;
const MonthBar = styled.div`
  width: 100%;
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

export function TransactionsContainer(props) {
  return (
    <TransactionWrapper>
      <MonthBar>
        <ArrowLeft
          onClick={() => {
            props.setDMonths((x) => x + 1);
          }}
        >
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
        <ArrowRight
          onClick={() => {
            props.setDMonths((x) => x - 1);
          }}
        >
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
        <TransactionsView transactions={props.transactions}></TransactionsView>
      </TransactionsDiv>
    </TransactionWrapper>
  );
}
