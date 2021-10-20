import styled from "styled-components";

export const StyledTags = styled.ul`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.1rem;

  & li {
    color: white;
    font-size: 15px;
    border: 1px solid blue;
    background-color: darkblue;
    cursor: pointer;

    :hover {
      background-color: darkgreen;
    }
  }
`;
