import { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CommentType } from "../../util/types/CommentTypes";
import { Comment } from "../Comment/Comment";
import { Modal } from "../Modal/Modal";
import { CloseBtn } from "../Modal/Modal.style";
import { StyledComments } from "./Comments.style";

type PropsComments = {
  comments: CommentType[];
  isOpen: boolean;
  closeComments: () => void;
};

type StateComments = {};

export class Comments extends Component<PropsComments, StateComments> {
  render() {
    const { comments, isOpen, closeComments } = this.props;

    return (
      <Modal isOpen={isOpen}>
        <StyledComments>
          <h3>Comentarios</h3>
          {comments.length > 1 ? (
            comments.map((c) => (
              <Comment key={`Comment-key-${c.id}`} comment={c} />
            ))
          ) : (
            <h4>No hay comentarios en este Post</h4>
          )}
        </StyledComments>
        <CloseBtn onClick={closeComments}>
          <AiFillCloseCircle size="32" color="black" />
        </CloseBtn>
      </Modal>
    );
  }
}
