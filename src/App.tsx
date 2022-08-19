import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { fetchPosts } from './api/api';
import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Loader } from './components/Loader';
import { PostDetails } from './components/PostDetails';
import { Posts } from './components/Posts';
import { Toast } from './components/Toast';
import AppContext from './context/AppContext';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [fetchError, setFetchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const location = useLocation();

  const handlePostSelection = useCallback((post: Post) => {
    setSelectedPost(post);
  }, []);

  const loadPosts = useCallback(async () => {
    const loadedPosts = await fetchPosts('trendingsubreddits');

    if (loadedPosts !== 'Error') {
      setPosts(loadedPosts.data.children);
      setFetchError(false);
    } else {
      setFetchError(true);
      setErrorMessage('Error fetching posts');
    }
  }, []);

  useEffect(() => {
    loadPosts();

    if (location.pathname.includes('/posts')) {
      loadPosts();
    }
  }, [loadPosts, location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  }, [showError]);

  return (
    <AppContext.Provider value={useMemo(() => ({
      selectedPost,
      handlePostSelection,
      fetchError,
    }), [fetchError, handlePostSelection, selectedPost])}
    >
      <div className="App">
        <Header />

        {showError && (
          <Toast errorMessage={errorMessage} />
        )}

        <Routes>
          <Route
            path="/"
            element={<HomePage setShowError={setShowError} />}
          />
          {!fetchError && (
            <Route
              path="/posts"
              element={
                posts.length
                  ? (
                    <Posts posts={posts} />
                  )
                  : (
                    <Loader />
                  )
              }
            />
          )}
          <Route
            path={`/posts/:${selectedPost?.data.id}`}
            element={<PostDetails />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
