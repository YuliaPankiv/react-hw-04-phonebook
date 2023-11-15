import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
  text-align: center;  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  color: #555;
  line-height: 2em;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:hover
     {
      box-shadow: 0px 0px 2px 2px #449cf4;
      // border:none;
    }
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-color: #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #449cf4;
    border-color: #449cf4;
    color: white;
  }
`;
