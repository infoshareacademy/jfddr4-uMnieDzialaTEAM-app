import styled from "styled-components";
import { TransactionsView } from "./Transactions";

const TransactionWrapper = styled.div`
  width: 900px;
  height: 416px;
  left: 399px;
  top: 658px;
  background: rgba(255, 255, 255, 0.06);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;

const TransactionsDiv = styled.div`
  display: flex;
`;

export function TransactionsContainer() {
  return (
    <TransactionWrapper>
      <TransactionsDiv>
        <TransactionsView></TransactionsView>
      </TransactionsDiv>
    </TransactionWrapper>
  );
}
