import React from "react";
import styled from "styled-components";
import UserChip from "containers/MenuBar/OnlineUsers/UserChip";

import haochen from "assets/userImages/haochen.jpeg";
import lewistseng from "assets/userImages/lewistseng.jpeg";
import saptakumar from "assets/userImages/saptakumar.png";

const SOnlineUsers = styled.div`
  p {
    display: inline-block;
    margin-top: -10px;
    line-height: 50px;
    vertical-align: middle;
    margin-right: 20px;
  }
  div {
    line-height: 50px;
    vertical-align: middle;
  }
  margin-right: 25px;
`;

const getUser = name => {
  return name === "Roger" ? (
    <UserChip src={haochen} color="red" />
  ) : name === "Haochen" ? (
    <UserChip src={haochen} color="red" />
  ) : name === "Sapta" ? (
    <UserChip src={saptakumar} color="purple" />
  ) : (
    <UserChip src={lewistseng} color="gold" />
  );
};

const OnlineUsers = props => {
  return (
    <SOnlineUsers>
      <p>{props.name}</p>
      {getUser(props.name)}
    </SOnlineUsers>
  );
};

export default OnlineUsers;
