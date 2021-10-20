import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid gray;
  width: 100%;

  & img {
    width: 15%;
    height: 100%;
  }
  & p {
    text-align: left;
    padding: 0.5rem;
  }

  & .comment_top {
    display: flex;
    justify-content: space-between;
    background-color: gainsboro;

    & div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 85%;
    }

    & h3 {
      margin: 0;
    }

    & .comment_date {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      font-size: 13px;
    }
  }
`;
