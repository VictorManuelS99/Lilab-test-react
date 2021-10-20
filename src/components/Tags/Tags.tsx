import { Component } from "react";
import { getPostsByTag } from "../../util/services/PostService";
import { getTags } from "../../util/services/TagService";
import { PostPreview } from "../../util/types/PostTypes";
import { StyledTags } from "./Tags.style";

type StateTags = { tags: Array<string> };

type PropsTags = { updatePosts: (posts: PostPreview[]) => void };

export class Tags extends Component<PropsTags, StateTags> {
  state: StateTags = {
    tags: [],
  };

  componentDidMount() {
    this.fetchTags();
  }

  render() {
    const { tags } = this.state;

    return (
      <StyledTags>
        {tags.length > 1 &&
          tags.map((tag, i) => (
            <li
              key={i}
              onClick={() => {
                this.fetchPostsByTag(tag);
              }}
            >
              #{tag}
            </li>
          ))}
      </StyledTags>
    );
  }

  async fetchTags() {
    const { data } = await getTags();
    this.setState(() => ({ tags: data }));
  }

  async fetchPostsByTag(tag: string) {
    const { data } = await getPostsByTag(tag);
    this.props.updatePosts(data);
  }
}
