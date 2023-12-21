import styled from '@emotion/styled';

export const CustomContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

export const OptionsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Custom = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  &.active {
    transform: scale(1.2)
  }
`;
