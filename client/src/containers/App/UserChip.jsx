import React from "react";
import styled from "styled-components";

const SUserChip = styled.div`
  height: 30px;
  padding: 10px;
  line-height: 30px;
  border: solid black 1px;
  border-radius: 25px;
  background-color: white;
`;

const UserChip = props => {
  return <SUserChip>{props.name}</SUserChip>;
};

// const SUserChip = styled.div`
//   position: absolute;
//   left: 1020px;
//   top: ${props => props.location + "px"};
//   border-radius: 20px;
//   padding: 10px;
//   border: solid black 1px;
//   background-color: white;
// `;

// const UserChip = props => {
//   return <SUserChip location={props.userChip.location}>{props.name}</SUserChip>;
// };

export default UserChip;
