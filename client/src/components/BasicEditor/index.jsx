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
  const { registerID, register, updateRegister } = props;

  const onChange = e => {
    updateRegister(registerID, e.target.value);
  };

  return (
    <STextArea rows="8" cols="40" value={register.field0} onChange={onChange} />
  );
};

export { BasicEditor };
