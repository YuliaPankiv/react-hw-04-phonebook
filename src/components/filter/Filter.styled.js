import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 10px;
  font-size: 16px;
  color: #555;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:hover {
      box-shadow: 0px 0px 2px 2px #449cf4;
    }
  }
`;
