import styled from '@emotion/styled';

export const Drop = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  z-index: 1;
`;
