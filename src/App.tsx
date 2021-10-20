import { Component } from "react";
import { ModalProvider } from "styled-react-modal";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { Tags } from "./components/Tags/Tags";
import { getPosts } from "./util/services/PostService";
import { PostPreview } from "./util/types/PostTypes";

export class App extends Component {
  state = {
    posts: [],
  };

  constructor(props: {}) {
    super(props);
    this.updatePosts = this.updatePosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className="App">
        <ModalProvider>
          <Header />
          <Tags updatePosts={this.updatePosts} />
          <Posts posts={this.state.posts} />
        </ModalProvider>
      </div>
    );
  }

  async fetchPosts() {
    const { data } = await getPosts();
    this.setState((state) => ({ ...state, posts: data }));
  }

  updatePosts(posts: Array<PostPreview>) {
    this.setState(() => ({ posts }));
  }
}
