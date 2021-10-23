import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: .625rem 0;
  text-align: -webkit-center;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: .3125rem .625rem;
  border-radius: 3.125rem;
  color: #fff;
  background-color: ${props => props.color};
  white-space: nowrap;

  @media (max-width: 768px){
    display: none;
  }
`;

export const Value = styled.div<{ color: string }>`
  text-align: right;
  color: ${props => props.color};
`;

export const CategoryMob = styled.div<{ color: string }>`
  display: none;
   @media (max-width: 768px){
    display: block;
    border-radius: 3.125rem;
    background-color: ${props => props.color};
    width: 50%;   
   }
`;