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
import AppContext from './context/AppContext';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showPosts, setShowPosts] = useState(false);

  const location = useLocation();

  const handlePostSelection = useCallback((post: Post) => {
    setSelectedPost(post);
  }, []);

  const loadPosts = useCallback(async () => {
    const loadedPosts = await fetchPosts('trendingsubreddits');

    setPosts(loadedPosts.data.children);
    setShowPosts(true);
  }, []);

  useEffect(() => {
    if (location.pathname.includes('/posts')) {
      loadPosts();
    }
  }, [loadPosts, location.pathname]);

  return (
    <AppContext.Provider value={useMemo(() => ({
      selectedPost,
      handlePostSelection,
    }), [handlePostSelection, selectedPost])}
    >
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={<HomePage loadPosts={loadPosts} />}
          />
          <Route
            path="/posts"
            element={
              showPosts
                ? (
                  <Posts
                    posts={posts}
                  />
                )
                : (
                  <Loader />
                )
            }
          />
          <Route
            path={`/posts/:${selectedPost?.data.id}`}
            element={<PostDetails />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
