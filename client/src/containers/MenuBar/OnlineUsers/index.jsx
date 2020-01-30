import React from "react";
import styled from "styled-components";
import UserChip from "containers/MenuBar/OnlineUsers/UserChip";

import haochen from "assets/userImages/haochen.jpeg";
import lewistseng from "assets/userImages/lewistseng.jpeg";
import saptakumar from "assets/userImages/saptakumar.png";

const SOnlineUsers = styled.div`
  * {
    line-height: 50px;
    vertical-align: middle;
  }
  margin-right: 25px;
`;

const OnlineUsers = () => {
  return (
    <SOnlineUsers>
      <UserChip src={haochen} color="red" />
      <UserChip src={lewistseng} color="gold" />
      <UserChip src={saptakumar} color="purple" />
    </SOnlineUsers>
  );
};

export default OnlineUsers;
