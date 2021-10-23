import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0 0 .3125rem #ccc;
  border-radius: .625rem;
  margin-top: 1.25rem;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}%` : 'auto'};
  padding: .625rem 0;
  text-align: center;

  &:last-child{
    text-align: right;
  }
`;