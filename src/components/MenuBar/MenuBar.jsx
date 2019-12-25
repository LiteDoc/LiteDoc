import React from "react";
import styled from "styled-components";
import { theme } from "utils";

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
`;

const MenuBar = () => {
  return <SMenuBar>MenuBar</SMenuBar>;
};

export { MenuBar };
