import styled from "styled-components";

const UserChip = styled.img`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  margin-left: -15px;

  user-select: none;
  user-drag: none;
`;

export default UserChip;
