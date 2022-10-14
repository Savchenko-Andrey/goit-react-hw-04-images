import { Field, Form } from 'formik';
import styled from 'styled-components';

export const HeaderForm = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-top: 5px;
  background-color: lightblue;
  border-radius: 10px;
`;

export const Serchbar = styled(Form)`
  position: relative;
`;

export const InputForm = styled(Field)`
  width: 300px;
  height: 30px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: solid 1px #f2f2f2;
  :hover,
  :focus {
    border: blue;
    box-shadow: 2px 2px 3px blue;
  }
`;
