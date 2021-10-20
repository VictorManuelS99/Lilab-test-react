import styled from "styled-components";

export const PostStyled = styled.div`
  box-shadow: 1px 1px 6px 0px gray;
  padding: 1rem;
  border-radius: 7px;
`;

export const Tags = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
`;

export const Tag = styled.li`
  color: blue;
`;

export const PostBody = styled.li`
  display: flex;
  flex-direction: column;

  & p {
    padding: 1rem;
    max-width: 400px;
  }
`;

export const ImgText = styled.div`
  display: flex;
`;

export const LikesComments = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.33rem;
`;

export const LikesCommentsChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  gap: 0.2rem;
  cursor: pointer;
`;

export const PostFoot = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a4aaa;
    text-decoration: underline;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #484848;
  }
`;
