import React from "react";
import styled from "styled-components";

const SUserChip = styled.div`
  position: absolute;
  left: 1020px;
  top: ${props => props.location + "px"};
  border-radius: 20px;
  padding: 10px;
  border: solid black 1px;
  background-color: white;
`;

const UserChip = props => {
  return (
    <SUserChip location={props.userChip.location}>
      {props.userChip.name}
    </SUserChip>
  );
};

export default UserChip;
