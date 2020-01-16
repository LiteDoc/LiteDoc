import React from "react";
import styled from "styled-components";
import { theme } from "utils";

const Divider = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 36px;
  width: 1px;
  height: 28px;
  margin: 0px 5px;
  background-color: ${theme.gray1};
`;

export default Divider;
