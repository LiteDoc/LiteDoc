import React from "react";
import styled from "styled-components";
import { theme } from "utils";

import DocTitle from "containers/MenuBar/DocTitle";
import MenuButton from "containers/MenuBar/MenuButton";
import OnlineUsers from "containers/MenuBar/OnlineUsers";

const SMenuBar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 100vw;
  background-color: ${theme.gray0};
  color: ${theme.gray3};
  line-height: 50px;

  display: flex;
  justify-content: space-between;
  > {
  }
`;

const MenuBar = () => {
  return (
    <SMenuBar>
      <MenuButton />
      <DocTitle />
      <OnlineUsers />
    </SMenuBar>
  );
};

export { MenuBar };
