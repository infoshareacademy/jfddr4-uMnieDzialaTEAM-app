import styled from "styled-components";
import DateTime from "./DateTime";
import { Menu } from "./Menu";
import mario from "./images/Mario-icon.png";
import { TransactionsContainer } from "./TransactionsContainer";
import DonutChart from "./Chart";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 1150px;
  max-height: 100vh;
  display: flex;
  background: radial-gradient(50% 50% at 50% 50%, #3d3c68 0%, #1b1a2c 100%);
`;
const LeftPanel = styled.div`
  min-height: 1150px;
  max-height: 100vh;
  background: #1b1a2c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RightPanel = styled.div`
  min-height: 1150px;
  flex: 1;
  height: 100vh;
  display: flex;
  border-left: #fff 1px groove;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  color: rgba(255, 255, 255, 1);
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0px;

  div {
    display: flex;
  }
  img {
    width: 75px;
    height: 75px;
    left: 300px;
    top: 20px;
    margin-left: 20px;
  }

  #name {
    padding-left: 15px;
  }
`;

const Transaction = styled.div`
  width: 90%;
  left: 399px;
  top: 658px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
`;

export function PageContainer(props) {
  // const groceries = [];
  // const household = [];
  // const work = [];
  // const other = [];

  // const transactionsArr = props.transactions;
  // console.log(transactionsArr);

  // transactionsArr.filter((el) => {
  //   if (el.type === "expense" && el.category === "groceries") {
  //     groceries.push(el.value);
  //   } else if (el.type === "expense" && el.category === "household") {
  //     household.push(el.value);
  //   } else if (el.type === "expense" && el.category === "work") {
  //     work.push(el.value);
  //   } else if (el.type === "expense" && el.category === "other") {
  //     other.push(el.value);
  //   }
  // });

  // const grocSum = groceries.reduce((acc, cur) => (acc += cur), 0);
  // const houseSum = household.reduce((acc, cur) => (acc += cur), 0);
  // const workSum = work.reduce((acc, cur) => (acc += cur), 0);
  // const otherSum = other.reduce((acc, cur) => (acc += cur), 0);

  // const seriesArr = [grocSum, houseSum, workSum, otherSum];

  // console.log(seriesArr);

  return (
    <Wrapper>
      <LeftPanel>
        <Menu />
      </LeftPanel>
      <RightPanel>
        <Header>
          <div>
            <img src={mario} alt="avatar" />
            <div id="name">Hi, Mario</div>
          </div>
          <DateTime />
        </Header>
        <DonutChart transactions={props.transactions} />
        <Transaction>
          <TransactionsContainer
            transactions={props.transactions}
            setDMonths={props.setDMonths}
          />
        </Transaction>
      </RightPanel>
    </Wrapper>
  );
}
