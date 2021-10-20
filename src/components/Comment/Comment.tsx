import { Component } from "react";
import { StyledComment } from "../Comment/Comment.style";
import { CommentType } from "../../util/types/CommentTypes";

type PropsComment = { comment: CommentType };

export class Comment extends Component<PropsComment> {
  render() {
    const { message, owner, publishDate } = this.props.comment;

    const dateParsed = new Date(publishDate).toLocaleDateString();
    const timeParsed = new Date(publishDate).toLocaleTimeString();

    return (
      <StyledComment>
        <div className="comment_top">
          <img
            src={owner.picture}
            alt={owner.firstName}
            width="25"
            height="25"
          />
          <div>
            <h3>
              {owner.firstName} {owner.lastName}
            </h3>
            <div className="comment_date">
              <span>{dateParsed}</span>
              <span>{timeParsed}</span>
            </div>
          </div>
        </div>

        <p>- {message}</p>
      </StyledComment>
    );
  }
}
