import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Icons = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover,
  :focus {
    width: 22px;
    height: 22px;
    fill: blue;
  }
`;

export const LoadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  outline: none;
  border: solid 1px #f2f2f2;
  border-radius: 10px;
  color: blue;
  background-color: lightblue;
  transition: border 250ms, box-shadow 250ms, scale 250ms;
  :hover,
  :focus {
    cursor: pointer;
    box-shadow: 2px 2px 3px blue;
    scale: 1.1;
  }
`;

export const BtnIcons = styled.button`
  position: absolute;
  top: 4px;
  right: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
`;
