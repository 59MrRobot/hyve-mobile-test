import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './HomePage.scss';

interface Props {
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePage: React.FC<Props> = React.memo(
  ({ setShowError }) => {
    const { fetchError } = useContext(AppContext);
    const [isClicked, setIsClicked] = useState(false);

    return (
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
            to="/"
            className="homepage__button"
            onClick={() => {
              if (fetchError) {
                setShowError(true);
              } else {
                setIsClicked(true);
              }
            }}
          >
            Load Subreddit
          </Link>

          {(!fetchError && isClicked) && (
            <Navigate to="/posts" replace />
          )}
        </div>
      </div>
    );
  },
);
