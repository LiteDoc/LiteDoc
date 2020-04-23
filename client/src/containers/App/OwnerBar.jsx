import React from "react";
import styled from "styled-components";
import UserChip from "./UserChip";

import { theme } from "utils";

const SOwnerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SLockButton = styled.div`
  background-color: ${(props) => props.color};
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

const OwnerBar = (props) => {
  let {
    ownerName,
    registerID,
    isOwner,
    isLocked,
    lockRegister,
    unlockRegister,
  } = props;

  return (
    <SOwnerBar>
      {isOwner ? ( // user is owner and register is locked
        <>
          <UserChip name={ownerName} />
          <SLockButton
            color={theme.red}
            onClick={() => unlockRegister(registerID)}
          >
            <span>Unlock</span>
          </SLockButton>
        </>
      ) : isLocked ? ( // user is not owner and register is locked
        <UserChip name={ownerName} />
      ) : (
        // unlocked and unowned
        <SLockButton
          color={theme.green}
          onClick={() => lockRegister(registerID)}
        >
          <span>Lock</span>
        </SLockButton>
      )}
    </SOwnerBar>
  );
};

export default OwnerBar;
