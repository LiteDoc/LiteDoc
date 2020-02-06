import React, { useState } from "react";
import styled from "styled-components";

const STextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  font-size: 16px;
`;

const BasicEditor = props => {
  const { registerId, register, updateRegister } = props;

  const onChange = e => {
    updateRegister(registerId, e.target.value);
  };

  return (
    <STextArea rows="8" cols="40" value={register.data} onChange={onChange} />
  );
};

export { BasicEditor };
