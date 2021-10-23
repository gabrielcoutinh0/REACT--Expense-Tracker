import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 .3125rem #ccc;
  border-radius: .625rem;
  padding: 1.25rem;
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  align-items: center;
`;

export const InputLabel = styled.label`
  margin: .625rem;

  &:last-child{
    grid-column: 1 / span 2;
  }
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: .3125rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 1.875rem;
  padding: 0 .625rem;
  border: .0625rem solid lightblue;
  border-radius: .625rem;
`;

export const Select = styled.select`
  width: 85%;
  height: 1.875rem;
  padding: 0 .625rem;
  border: .0625rem solid lightblue;
  border-radius: .625rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 1.875rem;
  padding: 0 .625rem;
  border: .0625rem solid #4454c3;
  background-color: #4454c3;
  color: white;
  cursor: pointer;
  border-radius: 3.125rem;

  &:hover{
    background-color: #3d4bb7;
    color: white;
  }
`;