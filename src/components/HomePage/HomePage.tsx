import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

interface Props {
  loadPosts: () => Promise<void>;
}

export const HomePage: React.FC<Props> = React.memo(
  ({ loadPosts }) => (
    <div className="homepage">
      <div className="homepage__wrapper">
        <div className="homepage__text">
          <p>
            Application created using &quot;create-react-app&quot;
            that fetches a subreddit from the Reddit API and displays the posts.
          </p>
          <p>
            Additionally uses TypeScript, React Router, Eslint Airbnb standards,and React Hooks.
          </p>
        </div>

        <Link
          to="/posts"
          className="homepage__button"
          onClick={() => loadPosts()}
        >
          Load Subreddit
        </Link>
      </div>
    </div>
  ),
);
