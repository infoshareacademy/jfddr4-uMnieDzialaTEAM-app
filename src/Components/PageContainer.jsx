import styled from "styled-components";
import DateTime from "./DateTime";
import { Menu } from "./Menu";
import mario from "./images/Mario-icon.png"
import { TransactionsContainer } from "./TransactionsContainer";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: radial-gradient(50% 50% at 50% 50%, #3D3C68 0%, #1B1A2C 100%);
`
const LeftPanel = styled.div`
  width:300px;
  height: 100vh;
  background:#1B1A2C;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RightPanel = styled.div`
  flex:1;
  height: 100vh;
  display: flex;
  border-left:#fff 1px groove;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  width:1500px;
  color:rgba(255, 255, 255, 1);
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  div{
    display: flex;
  };
  img{
    width: 75px;
    height: 75px;
    left: 300px;
    top: 20px;
  };
  #name{
    padding-left:15px;
  }
  `

const Balance = styled.div`
  width:900px;
  height: 515px;
  top:119px;
  left:399px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 15px;
`

const Transaction = styled.div`
  width: 900px;
  height: 416px;
  left: 399px;
  top: 658px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
`


export function PageContainer() {
  return (
    <Wrapper>
      <LeftPanel>
      <Menu/>
      </LeftPanel>
      <RightPanel>
        <Header>
          <div>
            <img src={mario} alt="avatar"/>
            <div id="name">Hi, Mario</div>
          </div>
          <DateTime/>
        </Header>
        <Balance></Balance>
        <Transaction>
          <TransactionsContainer></TransactionsContainer>
        </Transaction>
      </RightPanel>
    </Wrapper>
  )
} 

