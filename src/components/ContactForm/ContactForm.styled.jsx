import styled from '@emotion/styled';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: block;
  padding: 0 10px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: blue;
  line-height: 30px;
  border-radius: 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border: 1px solid blue;
  font-size: 17px;
  border-radius: 5px;
  font-weight: 700;
  color: rgb(47, 47, 226);
  background-color: white;
  transition: 0.4s;
  &:hover,
  &:focus {
    transition: 0.4s;
    color: white;
    background-color: rgb(47, 47, 226);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: rgb(47, 47, 226);
  font-size: 1.5em;
`;
