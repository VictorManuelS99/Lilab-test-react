import { Component } from "react";
import { PostPreview } from "../../util/types/PostTypes";
import { UserPreview } from "../../util/types/UserTypes";
import { Spinner } from "../Modal/Modal.style";
import { ModalAutor } from "../Modal/ModalAutor";
import { Post } from "../Post/Post";
import { PostsStyled } from "./Posts.style";

type PropsPosts = { posts: PostPreview[] };
type PostsState = { autor: UserPreview | null };

export class Posts extends Component<PropsPosts, PostsState> {
  state: PostsState = {
    autor: null,
  };

  constructor(props: PropsPosts) {
    super(props);
    this.updateAutor = this.updateAutor.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    const { autor } = this.state;
    const { posts } = this.props;
    return (
      <PostsStyled>
        <h2>Posts</h2>
        {autor && (
          <ModalAutor
            isOpen={!!autor}
            autor={autor}
            closeModal={this.closeModal}
          />
        )}
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              post={post}
              key={`key-post-${post.id}`}
              updateAutor={this.updateAutor}
            />
          ))
        ) : (
          <Spinner />
        )}
      </PostsStyled>
    );
  }

  updateAutor(autor: UserPreview) {
    this.setState((state) => ({ ...state, autor: autor }));
  }

  closeModal() {
    this.setState((state) => ({ ...state, autor: null }));
  }
}
