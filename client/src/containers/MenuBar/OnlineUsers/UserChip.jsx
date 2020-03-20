import styled from "styled-components";

const UserChip = styled.img`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  margin-top: 4px;
  margin-left: -12px;

  user-select: none;
  user-drag: none;

  :hover {
    cursor: pointer;
  }
`;

export default UserChip;
