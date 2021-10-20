import { Component } from "react";
import { BiComment, BiLike, BiCalendar } from "react-icons/bi";

import { getCommentsByPost } from "../../util/services/CommentService";
import { getUserById } from "../../util/services/UserService";
import { CommentType } from "../../util/types/CommentTypes";
import { PostPreview } from "../../util/types/PostTypes";
import { UserPreview } from "../../util/types/UserTypes";
import { Comments } from "../Comments/Comments";
import {
  ImgText,
  LikesCommentsChild,
  LikesComments,
  PostBody,
  PostFoot,
  PostStyled,
} from "../Post/Post.style";
import { Tag, Tags } from "./Post.style";

type PostProps = {
  post: PostPreview;
  updateAutor: (autor: UserPreview) => void;
};

type PostState = {
  post: PostPreview;
  comments: CommentType[];
  isOpenComments: boolean;
};

export class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);

    this.openComments = this.openComments.bind(this);
    this.closeComments = this.closeComments.bind(this);
  }

  state: PostState = {
    post: {
      id: this.props.post.id,
      image: this.props.post.image,
      likes: this.props.post.likes,
      owner: this.props.post.owner,
      publishDate: this.props.post.publishDate,
      tags: this.props.post.tags,
      text: this.props.post.text,
    },
    comments: [],
    isOpenComments: false,
  };

  componentDidMount() {
    const newdate = new Date(this.state.post.publishDate).toLocaleDateString();

    this.setState((state: PostState) => ({
      ...state,
      post: { ...state.post, publishDate: newdate },
    }));

    this.getComments(this.state.post.id);
  }

  componentWillUnmount() {
    this.setState(null);
    this.openComments = () => null;
    this.closeComments = () => null;
  }

  render() {
    const { image, likes, publishDate, tags, text, id, owner } =
      this.state.post;

    const { updateAutor } = this.props;

    return (
      <PostStyled>
        <Comments
          isOpen={this.state.isOpenComments}
          comments={this.state.comments}
          closeComments={this.closeComments}
        />
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={`key-tag-${index}`}>#{tag}</Tag>
          ))}
        </Tags>
        <PostBody>
          <ImgText>
            <img src={image} alt={`Post ${id}`} width="100" />
            <p>{text}</p>
          </ImgText>
          <LikesComments>
            <LikesCommentsChild color="blue">
              <BiLike /> {likes}
            </LikesCommentsChild>
            <LikesCommentsChild color="green" onClick={this.openComments}>
              <BiComment /> {this.state.comments.length}
            </LikesCommentsChild>
          </LikesComments>
        </PostBody>
        <PostFoot>
          <span
            onClick={() => {
              updateAutor(owner);
            }}
          >
            {owner.firstName} {owner.lastName}
          </span>
          <p>
            <BiCalendar />
            {publishDate}
          </p>
        </PostFoot>
      </PostStyled>
    );
  }

  async getComments(id: string) {
    const { data } = await getCommentsByPost(id);

    await getUserById(this.state.post.owner.id);
    this.setState((state) => ({ ...state, comments: data }));
  }

  openComments() {
    this.setState((state) => ({ ...state, isOpenComments: true }));
  }

  closeComments() {
    this.setState((state) => ({
      ...state,
      isOpenComments: false,
      comments: [],
    }));
  }
}
