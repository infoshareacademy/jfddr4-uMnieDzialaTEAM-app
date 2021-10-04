import styled from "styled-components";

import LogoutBtn from './LogoutBtn';

const PageContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* max-width: 1070px; */
  box-sizing: content-box;
`;

export function PageContainer() {
  return (
    <PageContainerWrapper>
      <LogoutBtn />
    </PageContainerWrapper>
  )
}
