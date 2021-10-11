import styled from "styled-components";
import DateTime from "./DateTime";
import { Menu } from "./Menu";
import mario from "./images/Mario-icon.png";

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

export function PageContainer(props) {
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
        {props.children}
      </RightPanel>
    </Wrapper>
  );
}
