import React from "react";
import styled from "styled-components";
import { theme } from "utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICON_MAP } from "utils/iconMap";

const SIconButtonC = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
  width: 32px;
  height: 32px;
  margin: 2px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: ${theme.gray1};
  }
`;

const ToolButton = props => {
  return (
    <SIconButtonC>
      <FontAwesomeIcon icon={ICON_MAP[props.icon]} />
    </SIconButtonC>
  );
};

export { ToolButton };
