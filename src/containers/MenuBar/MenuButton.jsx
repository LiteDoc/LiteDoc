import React from "react";
import styled from "styled-components";
import { theme } from "utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICON_MAP } from "utils/iconMap";

const SMenuButton = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 50px;
  width: 48px;
  height: 48px;
  margin-left: 15px;

  :hover {
    cursor: pointer;
  }
`;

const MenuButton = () => {
  return (
    <SMenuButton>
      <FontAwesomeIcon icon={ICON_MAP["menu"]} size="lg" />
    </SMenuButton>
  );
};

export default MenuButton;
