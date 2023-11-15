import styled from '@emotion/styled';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  align-items: center;
  &:hover{
    background-color: #449cf43d;

  }
`;

export const Delete = styled.button`
  margin-left: 40px;
  border-color: #ccc;
  border-radius: 4px;
font-size: 22px;
cursor: pointer;
 &:hover {
    background-color: #449cf4;
    border-color: #449cf4;
    color: white;
`;
