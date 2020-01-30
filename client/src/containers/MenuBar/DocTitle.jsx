import React from "react";
import styled from "styled-components";
import { theme } from "utils";

const SDocTitle = styled.div`
  input {
    background-color: transparent;
    border: none;
    text-align: center;
    color: ${theme.white1};
    font-size: 24px;
    height: 36px;
    line-height: 50px;
    vertical-align: middle;
    :focus {
      background-color: ${theme.gray3};
      color: black;
      border: none;
      outline: none;
      border-radius: 25px;
    }
  }
`;

const DocTitle = () => {
  return (
    <SDocTitle>
      <input defaultValue="New Document 1" />
    </SDocTitle>
  );
};

export default DocTitle;
