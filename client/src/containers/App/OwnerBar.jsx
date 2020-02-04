import React from "react";
import styled from "styled-components";
import UserChip from "./UserChip";

import { theme } from "utils";

const SOwnerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const SLockButton = styled.div`
  background-color: green;
  padding: 15px 25px;
  margin: 15px;
  border-radius: 30px;
  height: 25px;

  > span {
    line-height: 25px;
    color: white;
    font-size: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

const OwnerBar = props => {
  const { name, registerId, register, lockRegister, unlockRegister } = props;
  return (
    <SOwnerBar>
      {register.isLocked && name === register.owner ? (
        <>
          <UserChip name={register.owner} />
          <SLockButton
            color={theme.red}
            onClick={() => unlockRegister(registerId)}
          >
            <span>Unlock</span>
          </SLockButton>
        </>
      ) : register.isLocked ? (
        <UserChip name={register.owner} />
      ) : (
        <SLockButton
          color={theme.green}
          onClick={() => lockRegister(registerId)}
        >
          <span>Lock</span>
        </SLockButton>
      )}
    </SOwnerBar>
  );
};

export default OwnerBar;
