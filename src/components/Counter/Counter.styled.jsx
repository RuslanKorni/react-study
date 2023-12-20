import styled from '@emotion/styled';

export const CounterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

export const Value = styled.span`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #2980b9;
  }
`;
