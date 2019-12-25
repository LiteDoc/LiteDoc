import React from "react";
import styled from "styled-components";
import { theme } from "utils";

const SToolBar = styled.div`
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 0px;
  height: 40px;
  width: 100vw;
  line-height: 40px;
  background-color: ${theme.gray0};
  color: ${theme.gray3};
  border-top: 0.5px solid ${theme.gray2};
`;

const ToolBar = () => {
  return <SToolBar>Tool Bar</SToolBar>;
};

export { ToolBar };
