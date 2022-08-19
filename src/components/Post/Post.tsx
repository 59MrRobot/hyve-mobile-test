import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './Post.scss';

interface Props {
  post: Post;
  number: number;
}

export const Post: React.FC<Props> = React.memo(
  ({ post, number }) => {
    const {
      handlePostSelection,
    } = useContext(AppContext);

    const { id, title, selftext } = post.data;

    return (
      <Link
        to={`:${id}`}
        className="post"
        onClick={() => {
          handlePostSelection(post);
          window.localStorage.setItem('postContent', selftext);
          window.localStorage.setItem('postTitle', title);
        }}
      >
        <div className="post__wrapper">
          <p className="post_number">{number}</p>
          <h3 className="post__title">{title}</h3>
        </div>
      </Link>
    );
  },
);
