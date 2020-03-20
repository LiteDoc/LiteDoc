import React, { useState, useRef } from "react";
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
  const { cursor, setCursor } = useState(0);
  const textAreaEl = useRef(null);

  const onChange = e => {
    // let cursorStart = e.target.selectionStart;
    // let cursorEnd = e.target.selectionEnd;
    updateRegister(registerID, e.target.value);
    // textAreaEl.setSelectionRange(cursorStart, cursorEnd);
  };

  return (
    <STextArea
      rows="8"
      cols="40"
      value={register.field0}
      onChange={onChange}
      ref={textAreaEl}
    />
  );
};

export { BasicEditor };
