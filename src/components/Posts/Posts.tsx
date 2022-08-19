import React from 'react';
import { Post } from '../Post/Post';
import './Posts.scss';

interface Props {
  posts: Post[];
}

export const Posts: React.FC<Props> = React.memo(
  ({ posts }) => (posts.length
    ? (
      <div className="posts">
        <div className="posts__wrapper">
          <ul className="posts__list">
            {posts.map((post, index) => (
              <li key={post.data.id}>
                <Post
                  post={post}
                  number={index + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
    : (
      <div>No posts founds</div>
    )),
);
