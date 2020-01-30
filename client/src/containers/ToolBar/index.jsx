import React from "react";
import styled from "styled-components";
import { theme } from "utils";

import { ToolButton } from "components/ToolButton";
import Divider from "containers/ToolBar/Divider";

const SToolBar = styled.div`
  z-index: 1;
  position: fixed;
  text-align: center;
  top: 50px;
  left: 0px;
  line-height: 36px;
  height: 36px;
  width: 100vw;
  background-color: ${theme.gray0};
  color: ${theme.gray3};
  border-top: 0.5px solid ${theme.gray2};
`;

const ToolBar = () => {
  return (
    <SToolBar>
      <ToolButton icon="bold" />
      <ToolButton icon="italic" />
      <ToolButton icon="underline" />
      <Divider />
      <ToolButton icon="alignLeft" />
      <ToolButton icon="alignCenter" />
      <ToolButton icon="alignRight" />
      <ToolButton icon="alignJustify" />
    </SToolBar>
  );
};

export { ToolBar };
