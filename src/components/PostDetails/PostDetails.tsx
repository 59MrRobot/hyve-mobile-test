import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './PostDetails.scss';
import { useNavigate } from 'react-router-dom';

export const PostDetails: React.FC = React.memo(
  () => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      setPostTitle(window.localStorage.getItem('postTitle')!);
      setPostContent(window.localStorage.getItem('postContent')!);
    }, []);

    return (
      <div className="post-details">
        <div className="post-details__wrapper">
          <button
            type="button"
            className="post-details__button"
            onClick={() => navigate(-1)}
          >
            Return
          </button>

          <h1>{postTitle}</h1>

          <ReactMarkdown>
            {postContent}
          </ReactMarkdown>
        </div>
      </div>
    );
  },
);
