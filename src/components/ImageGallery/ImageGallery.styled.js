import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-gap: 10px;
  padding: 10px;
  list-style: none;
`;
