import styled from '@emotion/styled';

export const Items = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  padding: 5px;
  color: rgb(47, 47, 226);
`;

export const Caption = styled.p`
  color: rgb(47, 47, 226);
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 5px;
  color: rgb(47, 47, 226);
  border-radius: 4px;
  background-color: white;
  border: 1px solid blue;
 transition: 0.4s;
  &:hover,
  &:focus {
     transition: 0.4s;
    color: white;
    background-color: rgb(47, 47, 226);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
`;
