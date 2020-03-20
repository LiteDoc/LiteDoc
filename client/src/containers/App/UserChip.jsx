import React from "react";
import styled from "styled-components";

const SUserChip = styled.div`
  background-color: white;
  height: 25px;
  margin: 15px;
  padding: 15px 25px;
  border-radius: 30px;
  border: solid black 1px;

  font-size: 20px;
`;

const UserChip = props => {
  return <SUserChip>{props.name}</SUserChip>;
};

export default UserChip;
